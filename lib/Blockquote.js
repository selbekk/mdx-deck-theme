"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'DIN OT', Georgia, serif;\n  font-size: 30px;\n  font-weight: 400;\n  margin-left: 120px;\n  max-width: 50%;\n  text-align: left;\n\n  p {\n    margin-left: 0;\n    max-width: 100%;\n    font-size: 30px;\n\n    &:last-of-type {\n      margin: 0;\n    }\n  }\n\n  cite {\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 1;\n    font-style: normal;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Blockquote = _styledComponents.default.blockquote(_templateObject());

var _default = function _default(props) {
  return _react.default.createElement(Blockquote, null, props.children, props.cite && _react.default.createElement("cite", null, props.cite));
};

exports.default = _default;