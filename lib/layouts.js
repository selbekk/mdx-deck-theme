'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CenteredLayout = exports.DefaultLayout = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 100%;\n  min-width: 100%;\n'], ['\n  min-height: 100%;\n  min-width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  align-items: center;\n  display: flex;\n  flex-direction: center;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n\n  > * {\n    margin-left: 0;\n  }\n'], ['\n  align-items: center;\n  display: flex;\n  flex-direction: center;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n\n  > * {\n    margin-left: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DefaultLayout = exports.DefaultLayout = _styledComponents2.default.div(_templateObject);

exports.default = DefaultLayout;
var CenteredLayout = exports.CenteredLayout = _styledComponents2.default.div(_templateObject2);