'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.swaggerConfig = void 0;
var _swagger = require('@nestjs/swagger');
var swaggerConfig = (exports.swaggerConfig = new _swagger.DocumentBuilder()
  .setTitle('Fiz-Burger - API Documentation')
  .setDescription('Janis - Challenge - API Solution.')
  .setVersion('1.0')
  .addTag('API Endpoints')
  .build());
