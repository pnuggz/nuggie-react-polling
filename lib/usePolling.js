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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var usePolling = function usePolling(props) {
  var model = props.model,
      interval = props.interval,
      retryCount = props.retryCount,
      onSuccess = props.onSuccess,
      onFailure = props.onFailure;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPolling = _useState2[0],
      togglePolling = _useState2[1];

  var persistedIsPolling = (0, _react.useRef)();
  var isMounted = (0, _react.useRef)();
  var poll = (0, _react.useRef)();
  persistedIsPolling.current = isPolling;
  (0, _react.useEffect)(function () {
    isMounted.current = true;
    startPolling();
    return function () {
      isMounted.current = false;
      stopPolling();
    };
  }, []);
  var shouldRetry = retryCount ? true : false;

  var stopPolling = function stopPolling() {
    if (isMounted.current) {
      if (poll.current) {
        clearTimeout(poll.current);
        poll.current = null;
      }

      togglePolling(false);
    }
  };

  var startPolling = function startPolling() {
    togglePolling(true);
    runPolling();
  };

  var runPolling = function runPolling() {
    var timeoutId = setTimeout(function () {
      model.then(function (resp) {
        return resp;
      }).then(onSuccess).then(function (continuePolling) {
        persistedIsPolling.current && continuePolling ? runPolling() : stopPolling();
      }).catch(function (error) {
        if (shouldRetry && retryCount > 0) {
          onFailure && onFailure(error);
          _readOnlyError("retryCount"), retryCount--;
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

var _default = usePolling;
exports.default = _default;