"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightTheme = exports.default = exports.darkTheme = void 0;

var _themes = _interopRequireDefault(require("mdx-deck/themes"));

var _constants = require("./constants");

var _layouts = require("./layouts");

var _Blockquote = _interopRequireDefault(require("./Blockquote"));

var _okaidia = _interopRequireDefault(require("react-syntax-highlighter/styles/prism/okaidia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var darkTheme = _objectSpread({}, _themes.default, {
  colors: {
    background: _constants.colors.black,
    text: _constants.colors.white,
    preBackground: '#464547',
    code: '#ff5b5b',
    link: _constants.colors.white
  },
  prism: {
    style: _okaidia.default
  },
  heading: {
    textAlign: 'left',
    width: '100%'
  },
  h1: {
    fontFamily: _constants.fonts.serif,
    fontSize: '54px',
    fontWeight: 400,
    marginTop: '2em',
    marginBottom: '1em'
  },
  h2: {
    fontFamily: _constants.fonts.serif,
    fontSize: '40px',
    fontWeight: 400,
    marginTop: '2em',
    marginBottom: '2em'
  },
  h3: {
    fontFamily: _constants.fonts.sansSerif,
    fontSize: '24px',
    fontWeight: 300,
    marginLeft: '40px',
    marginTop: '0'
  },
  p: {
    fontFamily: _constants.fonts.sansSerif,
    fontSize: '20px',
    fontWeight: 300,
    marginLeft: '40px',
    lineHeight: 1.5,
    maxWidth: '50%',
    textAlign: 'left'
  },
  pre: {
    backgroundColor: _constants.colors.black,
    color: _constants.colors.white,
    marginLeft: '80px',
    padding: '20px',
    maxWidth: '80%'
  },
  table: {
    fontSize: '20px',
    fontFamily: _constants.fonts.sansSerif,
    margin: '0 40px 40px',
    width: '80%',
    '& th': {
      borderColor: _constants.colors.black,
      fontWeight: 400,
      padding: '10px',
      textAlign: 'left'
    },
    '& td': {
      borderColor: _constants.colors.greyMedium,
      fontWeight: 300,
      padding: '10px'
    }
  },
  components: {
    blockquote: _Blockquote.default,
    wrapper: _layouts.DefaultLayout
  }
});

exports.darkTheme = darkTheme;
var _default = darkTheme;
exports.default = _default;

var lightTheme = _objectSpread({}, darkTheme, {
  colors: {
    background: _constants.colors.white,
    text: _constants.colors.black,
    preBackground: '#464547',
    code: '#ff5b5b',
    link: _constants.colors.black
  }
});

exports.lightTheme = lightTheme;