"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.replace");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalViewer = function ModalViewer(props) {
  var isLoading = props.isLoading,
      isShowing = props.isShowing,
      onModalCloseClick = props.onModalCloseClick,
      header = props.header,
      children = props.children,
      footer = props.footer,
      loader = props.loader,
      closeIcon = props.closeIcon,
      modalClass = props.modalClass;
  var combinedModalClassName = "modal fade show ".concat(isShowing ? 'active' : '', " ").concat(modalClass).replace(/ +(?= )/g, '').trim();

  var renderContent = function renderContent() {
    if (isLoading) {
      return !loader ? _react.default.createElement("div", null, "Loading...") : loader;
    }

    return children;
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: combinedModalClassName
  }, _react.default.createElement("div", {
    className: "modal__background"
  }), _react.default.createElement("div", {
    className: "modal__dialog"
  }, _react.default.createElement("div", {
    className: "card--modal"
  }, _react.default.createElement("div", {
    className: "card__header"
  }, header, _react.default.createElement("a", {
    className: "card__header--button-close",
    onClick: onModalCloseClick
  }, closeIcon)), _react.default.createElement("div", {
    className: "card__body"
  }, renderContent()), _react.default.createElement("div", {
    className: "modal__footer"
  }, footer)))));
};

var _default = ModalViewer;
exports.default = _default;