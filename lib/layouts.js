"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CenteredLayout = exports.default = exports.DefaultLayout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: center;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n\n  > * {\n    margin-left: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: 100%;\n  min-width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DefaultLayout = _styledComponents.default.div(_templateObject());

exports.DefaultLayout = DefaultLayout;
var _default = DefaultLayout;
exports.default = _default;

var CenteredLayout = _styledComponents.default.div(_templateObject2());

exports.CenteredLayout = CenteredLayout;