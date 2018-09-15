"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("./constants");

var _BekkLogo = _interopRequireDefault(require("./BekkLogo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-weight: 300;\n  font-size: 32px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: 400;\n  font-size: 80px;\n  margin: 1em 0 0 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  font-family: ", ";\n  font-weight: 300;\n  font-size: 32px;\n  justify-content: space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  padding: 20px 80px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

var TopContent = _styledComponents.default.header(_templateObject2(), _constants.fonts.sansSerif);

var Logo = (0, _styledComponents.default)(_BekkLogo.default)(_templateObject3());

var MainContent = _styledComponents.default.div(_templateObject4());

var Title = _styledComponents.default.h1(_templateObject5(), _constants.fonts.serif);

var Meta = _styledComponents.default.p(_templateObject6(), _constants.colors.greyLight, _constants.fonts.sansSerif);

var CoverSlide = function CoverSlide(props) {
  return _react.default.createElement(Container, {
    style: {
      color: props.textColor
    }
  }, _react.default.createElement(TopContent, null, _react.default.createElement(Logo, null), _react.default.createElement("div", {
    style: {
      flex: 1
    }
  }, props.where), _react.default.createElement("div", null, props.when)), _react.default.createElement(MainContent, null, _react.default.createElement(Title, null, props.what), _react.default.createElement(Meta, null, props.who)));
};

CoverSlide.propTypes = {
  where: _propTypes.string.isRequired,
  when: _propTypes.string.isRequired,
  what: _propTypes.string.isRequired,
  who: _propTypes.string.isRequired,
  textColor: _propTypes.string
};
var _default = CoverSlide;
exports.default = _default;