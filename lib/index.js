"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = exports.propTypes = void 0;

require("core-js/modules/es6.regexp.replace");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _modalController = _interopRequireDefault(require("./modalController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  isLoading: _propTypes.default.bool.isRequired,
  isShowing: _propTypes.default.bool.isRequired,
  onModalCloseClick: _propTypes.default.func.isRequired,
  header: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  footer: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  loader: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  closeIcon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  modalClass: _propTypes.default.string,
  modalClassName: _propTypes.default.string
};
exports.propTypes = propTypes;
var defaultProps = {
  header: null,
  children: null,
  footer: null,
  loader: null,
  closeIcon: null,
  modalClass: '',
  modalClassName: ''
};
exports.defaultProps = defaultProps;

var Modal = function Modal(props) {
  var isLoading = props.isLoading,
      isShowing = props.isShowing,
      onModalCloseClick = props.onModalCloseClick,
      header = props.header,
      children = props.children,
      footer = props.footer,
      loader = props.loader,
      closeIcon = props.closeIcon,
      modalClassName = props.modalClassName,
      modalClass = props.modalClass;
  var combinedModalClassName = "".concat(modalClass, " ").concat(modalClassName).replace(/ +(?= )/g, '').trim();
  return _react.default.createElement(_modalController.default, {
    isLoading: isLoading,
    isShowing: isShowing,
    onModalCloseClick: onModalCloseClick,
    header: header,
    footer: footer,
    loader: loader,
    modalClass: combinedModalClassName,
    closeIcon: closeIcon
  }, children);
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
var _default = Modal;
exports.default = _default;