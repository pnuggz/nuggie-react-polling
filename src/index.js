import React from 'react';
import PropTypes from 'prop-types';

import UsePolling from "./usePolling"

const propTypes = {
  model: PropTypes.func.isRequired,
  interval: PropTypes.number,
  retryCount: PropTypes.number,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func
}

const defaultProps = {
  interval: 3000,
  retryCount: 0,
  onFailure: () => { }
}

const ModelPolling = props => {
  const { model: model, interval: interval, retryCount: retryCount, onSuccess: onSuccess, onFailure: onFailure } = props;
  return UsePolling({ model: model, interval: interval, retryCount: retryCount, onSuccess: onSuccess, onFailure: onFailure })
};

ModelPolling.propTypes = propTypes
ModelPolling.defaultProps = defaultProps

export default ModelPolling;
