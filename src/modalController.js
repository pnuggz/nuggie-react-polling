import React, { useEffect, useState } from 'react';

import ModalViewer from './modalViewer';

const ModalController = props => {
  const {
    isLoading,
    isShowing,
    onModalCloseClick,
    header,
    children,
    footer,
    loader,
    closeIcon,
    modalClass,
  } = props;

  const [poseDisplayState, setPoseDisplayState] = useState('preLoad');

  const bodyElement = document.getElementsByTagName('body');

  useEffect(() => {
    if (isShowing) {
      setPoseDisplayState('loaded');
    } else {
      setPoseDisplayState('preLoad');
    }
  }, [isShowing]);

  useEffect(() => {
    if (isShowing) {
      if (bodyElement.classList.indexOf('modal__dom--open') === -1) {
        bodyElement.classList.add('modal__dom--open');
      }
    } else {
      if (bodyElement.classList.indexOf('modal__dom--open') !== -1) {
        bodyElement.classList.remove('modal__dom--open');
      }
    }
  }, [isShowing]);

  return (
    <ModalViewer
      isLoading={isLoading}
      isShowing={isShowing}
      onModalCloseClick={onModalCloseClick}
      header={header}
      footer={footer}
      loader={loader}
      closeIcon={closeIcon}
      modalClass={modalClass}
      poseDisplayState={poseDisplayState}
    >
      {children}
    </ModalViewer>
  );
};

export default ModalController;
