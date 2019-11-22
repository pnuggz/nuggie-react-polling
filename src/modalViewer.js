import React from 'react';

const ModalViewer = props => {
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

  const combinedModalClassName = `modal fade show ${isShowing ? 'active' : ''} ${modalClass}`
    .replace(/ +(?= )/g, '')
    .trim();

  const renderContent = () => {
    if (isLoading) {
      return !loader ? <div>Loading...</div> : loader;
    }

    return children;
  };

  return (
    <React.Fragment>
      <div className={combinedModalClassName}>
        <div className="modal__background"></div>
        <div className="modal__dialog">
          <div className="card--modal">
            <div className="card__header">
              {header}
              <a className="card__header--button-close" onClick={onModalCloseClick}>
                {closeIcon}
              </a>
            </div>
            <div className="card__body">{renderContent()}</div>
            <div className="modal__footer">{footer}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalViewer;
