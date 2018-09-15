'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  padding: 20px 80px;\n'], ['\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  padding: 20px 80px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  align-items: center;\n  display: flex;\n  font-family: ', ';\n  font-weight: 300;\n  font-size: 32px;\n  justify-content: space-between;\n'], ['\n  align-items: center;\n  display: flex;\n  font-family: ', ';\n  font-weight: 300;\n  font-size: 32px;\n  justify-content: space-between;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100px;\n'], ['\n  width: 100px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n'], ['\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-weight: 400;\n  font-size: 80px;\n  margin: 1em 0 0 0;\n'], ['\n  font-family: ', ';\n  font-weight: 400;\n  font-size: 80px;\n  margin: 1em 0 0 0;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-family: ', ';\n  font-weight: 300;\n  font-size: 32px;\n'], ['\n  color: ', ';\n  font-family: ', ';\n  font-weight: 300;\n  font-size: 32px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('./constants');

var _BekkLogo = require('./BekkLogo');

var _BekkLogo2 = _interopRequireDefault(_BekkLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);
var TopContent = _styledComponents2.default.header(_templateObject2, _constants.fonts.sansSerif);
var Logo = (0, _styledComponents2.default)(_BekkLogo2.default)(_templateObject3);
var MainContent = _styledComponents2.default.div(_templateObject4);
var Title = _styledComponents2.default.h1(_templateObject5, _constants.fonts.serif);
var Meta = _styledComponents2.default.p(_templateObject6, _constants.colors.greyLight, _constants.fonts.sansSerif);

var CoverSlide = function CoverSlide(props) {
  return _react2.default.createElement(
    Container,
    { style: { color: props.textColor } },
    _react2.default.createElement(
      TopContent,
      null,
      _react2.default.createElement(Logo, null),
      _react2.default.createElement(
        'div',
        { style: { flex: 1 } },
        props.where
      ),
      _react2.default.createElement(
        'div',
        null,
        props.when
      )
    ),
    _react2.default.createElement(
      MainContent,
      null,
      _react2.default.createElement(
        Title,
        null,
        props.what
      ),
      _react2.default.createElement(
        Meta,
        null,
        props.who
      )
    )
  );
};

CoverSlide.propTypes = {
  where: _propTypes.string.isRequired,
  when: _propTypes.string.isRequired,
  what: _propTypes.string.isRequired,
  who: _propTypes.string.isRequired,
  textColor: _propTypes.string
};

exports.default = CoverSlide;