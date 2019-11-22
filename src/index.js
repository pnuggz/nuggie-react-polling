import React from 'react';
import PropTypes from 'prop-types';

import ModalController from './modalController';

export const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isShowing: PropTypes.bool.isRequired,
  onModalCloseClick: PropTypes.func.isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  loader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  closeIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  modalClass: PropTypes.string,
  modalClassName: PropTypes.string,
};

export const defaultProps = {
  header: null,
  children: null,
  footer: null,
  loader: null,
  closeIcon: null,
  modalClass: '',
  modalClassName: '',
};

const Modal = props => {
  const {
    isLoading,
    isShowing,
    onModalCloseClick,
    header,
    children,
    footer,
    loader,
    closeIcon,
    modalClassName,
    modalClass,
  } = props;

  const combinedModalClassName = `${modalClass} ${modalClassName}`.replace(/ +(?= )/g, '').trim();

  return (
    <ModalController
      isLoading={isLoading}
      isShowing={isShowing}
      onModalCloseClick={onModalCloseClick}
      header={header}
      footer={footer}
      loader={loader}
      modalClass={combinedModalClassName}
      closeIcon={closeIcon}
    >
      {children}
    </ModalController>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
