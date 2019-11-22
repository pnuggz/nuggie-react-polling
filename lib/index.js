"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _usePolling = _interopRequireDefault(require("./usePolling"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  model: _propTypes.default.func.isRequired,
  interval: _propTypes.default.number,
  retryCount: _propTypes.default.number,
  onSuccess: _propTypes.default.func.isRequired,
  onFailure: _propTypes.default.func
};
var defaultProps = {
  interval: 3000,
  retryCount: 0,
  onFailure: function onFailure() {}
};

var ModelPolling = function ModelPolling(props) {
  var model = props.model,
      interval = props.interval,
      retryCount = props.retryCount,
      onSuccess = props.onSuccess,
      onFailure = props.onFailure;
  return (0, _usePolling.default)({
    model: model,
    interval: interval,
    retryCount: retryCount,
    onSuccess: onSuccess,
    onFailure: onFailure
  });
};

ModelPolling.propTypes = propTypes;
ModelPolling.defaultProps = defaultProps;
var _default = ModelPolling;
exports.default = _default;