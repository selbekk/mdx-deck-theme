"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BekkLogo = function BekkLogo(_ref) {
  var fill = _ref.fill,
      rest = _objectWithoutProperties(_ref, ["fill"]);

  return _react.default.createElement("svg", _extends({
    viewBox: "0 0 398.51 93.42"
  }, rest), _react.default.createElement("g", {
    fill: fill
  }, _react.default.createElement("path", {
    d: "M.19.07H35s28.78-2.43 28.78 21.76S39 44.2 34.28 44.2L0 44.15v-10.7h35.57s15.62.72 15.62-11.62c0-11.92-10.56-11.08-16-11.08H.18zM59.09 52.18c5.3 3.17 10.06 8.89 10.06 18.24 0 24.19-24.79 22.82-29.52 22.82L0 93.27V82.55h40.67s15.79.21 15.9-12.13c.07-8.48-5.32-14.93-10.47-18.24zM100.18 52.18h14.9v21.15c0 6.94 4.17 9.22 8.29 9.22h40.73l.06 10.87H115c-5.11 0-14.84-3.31-14.84-17.11zM164.21 33.51h-42.14c-4.13 0-7-.4-7-5.13 0-.74 0-11.51.07-12.33 0-5 2.56-5.28 6.69-5.28h42.33V.07h-48S100.18-1 100.18 16v11.88c0 15.27 11.4 16.27 16.51 16.27h47.42zM270.79.09c-2.24 2.47-23.06 27.36-25.7 30-4.4 4.34-12.28 3.41-18.66 3.41s-7.59-4.91-7.59-8.25V.12H204c0 3.18.05 29.25.05 33.38 0 3.28 1.54 10.72 14.74 10.72h25.44c3.27 0 8.2-2 13.85-8.68 1.67-2 25.85-31.06 29.77-35.38zM256.2 58.87c-3.11-3.36-5.95-6.69-15.74-6.69h-21.68c-10.85 0-14.71 7.87-14.71 12v29.1h14.77V68.22c0-3.34 1-5.22 7.46-5.22h6.11c6.11 0 9.53.22 12.68 3.36 2.63 2.62 24.26 24.28 26.75 26.89h17C284.7 88.77 258 60.77 256.2 58.87zM380.43.12c-2.24 2.47-23.06 27.36-25.7 30-4.4 4.34-12.28 3.41-18.66 3.41s-7.59-4.91-7.59-8.25V.15h-14.86c0 3.18.05 29.25.05 33.38 0 3.28 1.54 10.72 14.74 10.72h25.44c3.27 0 8.2-2 13.85-8.68 1.67-2 25.85-31.06 29.77-35.38zM365.84 58.9c-3.11-3.36-5.95-6.69-15.74-6.69h-21.69c-10.85 0-14.71 7.87-14.71 12v29.1h14.77V68.25c0-3.34 1.01-5.25 7.53-5.25h6.11c6.11 0 9.53.22 12.68 3.36 2.6 2.64 24.21 24.29 26.72 26.91h17c-4.17-4.46-30.91-32.47-32.67-34.37z"
  })));
};

BekkLogo.propTypes = {
  fill: _propTypes.string
};
BekkLogo.defaultProps = {
  fill: '#fff'
};
var _default = BekkLogo;
exports.default = _default;