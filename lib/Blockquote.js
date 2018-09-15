'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: \'DIN OT\', Georgia, serif;\n  font-size: 30px;\n  font-weight: 400;\n  margin-left: 120px;\n  max-width: 50%;\n  text-align: left;\n\n  p {\n    margin-left: 0;\n    max-width: 100%;\n    font-size: 30px;\n\n    &:last-of-type {\n      margin: 0;\n    }\n  }\n\n  cite {\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 1;\n    font-style: normal;\n  }\n'], ['\n  font-family: \'DIN OT\', Georgia, serif;\n  font-size: 30px;\n  font-weight: 400;\n  margin-left: 120px;\n  max-width: 50%;\n  text-align: left;\n\n  p {\n    margin-left: 0;\n    max-width: 100%;\n    font-size: 30px;\n\n    &:last-of-type {\n      margin: 0;\n    }\n  }\n\n  cite {\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 1;\n    font-style: normal;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Blockquote = _styledComponents2.default.blockquote(_templateObject);

exports.default = function (props) {
  return _react2.default.createElement(
    Blockquote,
    null,
    props.children,
    props.cite && _react2.default.createElement(
      'cite',
      null,
      props.cite
    )
  );
};