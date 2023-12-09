'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _swagger = require('./swagger.config');
Object.keys(_swagger).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _swagger[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _swagger[key];
    }
  });
});
