import React, { useState, useEffect, useRef } from 'react';

const usePolling = props => {
  const { model: model, interval: interval, retryCount: retryCount, onSuccess: onSuccess, onFailure: onFailure } = props;
  const [isPolling, togglePolling] = useState(false);

  const persistedIsPolling = useRef();
  const isMounted = useRef();
  const poll = useRef();

  persistedIsPolling.current = isPolling;

  useEffect(() => {
    isMounted.current = true;
    startPolling();
    return () => {
      isMounted.current = false;
      stopPolling();
    };
  }, []);

  const shouldRetry = retryCount ? true : false;

  const stopPolling = () => {
    if (isMounted.current) {
      if (poll.current) {
        clearTimeout(poll.current);
        poll.current = null;
      }
      togglePolling(false);
    }
  };

  const startPolling = () => {
    togglePolling(true);
    runPolling();
  };

  const runPolling = () => {
    const timeoutId = setTimeout(() => {
      model
        .then(resp => {
          return resp
        })
        .then(onSuccess)
        .then(continuePolling => {
          persistedIsPolling.current && continuePolling ? runPolling() : stopPolling();
        })
        .catch(error => {
          if (shouldRetry && retryCount > 0) {
            onFailure && onFailure(error);
            retryCount--;
            runPolling();
          } else {
            onFailure && onFailure(error);
            stopPolling();
          }
        });
    }, interval);
    poll.current = timeoutId;
  };

  return [isPolling, startPolling, stopPolling];
};

export default usePolling
