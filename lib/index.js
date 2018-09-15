"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  SmallText: true,
  StandaloneHeading: true,
  CoverSlide: true
};
Object.defineProperty(exports, "SmallText", {
  enumerable: true,
  get: function get() {
    return _SmallText.default;
  }
});
Object.defineProperty(exports, "StandaloneHeading", {
  enumerable: true,
  get: function get() {
    return _StandaloneHeading.default;
  }
});
Object.defineProperty(exports, "CoverSlide", {
  enumerable: true,
  get: function get() {
    return _CoverSlide.default;
  }
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _layouts = require("./layouts");

Object.keys(_layouts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _layouts[key];
    }
  });
});

var _themes = require("./themes");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _themes[key];
    }
  });
});

var _SmallText = _interopRequireDefault(require("./SmallText"));

var _StandaloneHeading = _interopRequireDefault(require("./StandaloneHeading"));

var _CoverSlide = _interopRequireDefault(require("./CoverSlide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }