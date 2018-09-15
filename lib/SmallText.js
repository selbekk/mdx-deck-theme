'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: 14px;\n  max-width: 60%;\n  margin-left: 40px;\n  text-align: left;\n'], ['\n  font-family: ', ';\n  font-size: 14px;\n  max-width: 60%;\n  margin-left: 40px;\n  text-align: left;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SmallText = _styledComponents2.default.p(_templateObject, _constants.fonts.sansSerif);

exports.default = SmallText;