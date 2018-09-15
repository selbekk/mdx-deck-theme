'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  margin: 0;\n  text-align: center;\n  font-weight: 400;\n'], ['\n  font-family: ', ';\n  margin: 0;\n  text-align: center;\n  font-weight: 400;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Heading = _styledComponents2.default.h1(_templateObject2, _constants.fonts.serif);

exports.default = function (props) {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      Heading,
      null,
      props.children
    )
  );
};