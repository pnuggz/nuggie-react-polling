"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _react = _interopRequireWildcard(require("react"));

var _modalViewer = _interopRequireDefault(require("./modalViewer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ModalController = function ModalController(props) {
  var isLoading = props.isLoading,
      isShowing = props.isShowing,
      onModalCloseClick = props.onModalCloseClick,
      header = props.header,
      children = props.children,
      footer = props.footer,
      loader = props.loader,
      closeIcon = props.closeIcon,
      modalClass = props.modalClass;

  var _useState = (0, _react.useState)('preLoad'),
      _useState2 = _slicedToArray(_useState, 2),
      poseDisplayState = _useState2[0],
      setPoseDisplayState = _useState2[1];

  var bodyElement = document.getElementsByTagName('body');
  (0, _react.useEffect)(function () {
    if (isShowing) {
      setPoseDisplayState('loaded');
    } else {
      setPoseDisplayState('preLoad');
    }
  }, [isShowing]);
  (0, _react.useEffect)(function () {
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
  return _react.default.createElement(_modalViewer.default, {
    isLoading: isLoading,
    isShowing: isShowing,
    onModalCloseClick: onModalCloseClick,
    header: header,
    footer: footer,
    loader: loader,
    closeIcon: closeIcon,
    modalClass: modalClass,
    poseDisplayState: poseDisplayState
  }, children);
};

var _default = ModalController;
exports.default = _default;