'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightTheme = exports.darkTheme = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _themes = require('mdx-deck/themes');

var _themes2 = _interopRequireDefault(_themes);

var _constants = require('./constants');

var _layouts = require('./layouts');

var _Blockquote = require('./Blockquote');

var _Blockquote2 = _interopRequireDefault(_Blockquote);

var _okaidia = require('react-syntax-highlighter/styles/prism/okaidia');

var _okaidia2 = _interopRequireDefault(_okaidia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var darkTheme = exports.darkTheme = _extends({}, _themes2.default, {
  colors: {
    background: _constants.colors.black,
    text: _constants.colors.white,
    preBackground: '#464547',
    code: '#ff5b5b',
    link: _constants.colors.white
  },
  prism: {
    style: _okaidia2.default
  },
  heading: {
    textAlign: 'left',
    width: '100%'
  },
  h1: {
    fontFamily: _constants.fonts.serif,
    fontSize: '80px',
    fontWeight: 400,
    marginTop: '2em',
    marginBottom: '1em'
  },
  h2: {
    fontFamily: _constants.fonts.serif,
    fontSize: '64px',
    fontWeight: 400,
    marginTop: '2em',
    marginBottom: '2em'
  },
  h3: {
    fontFamily: _constants.fonts.sansSerif,
    fontSize: '32px',
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
  li: {
    fontFamily: _constants.fonts.sansSerif,
    fontSize: '24px',
    fontWeight: '300'
  },
  components: {
    blockquote: _Blockquote2.default,
    wrapper: _layouts.DefaultLayout
  }
});

exports.default = darkTheme;
var lightTheme = exports.lightTheme = _extends({}, darkTheme, {
  colors: {
    background: _constants.colors.white,
    text: _constants.colors.black,
    preBackground: '#464547',
    code: '#ff5b5b',
    link: _constants.colors.black
  }
});