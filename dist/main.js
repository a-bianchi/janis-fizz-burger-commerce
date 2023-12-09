'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _regenerator = _interopRequireDefault(
  require('@babel/runtime/regenerator')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _common = require('@nestjs/common');
var _core = require('@nestjs/core');
var _platformFastify = require('@nestjs/platform-fastify');
var _swagger = require('@nestjs/swagger');
var _config = require('./modules/config');
var _app = require('./modules/app/app.module');
function bootstrap() {
  return _bootstrap.apply(this, arguments);
}
function _bootstrap() {
  _bootstrap = (0, _asyncToGenerator2['default'])(
    /*#__PURE__*/ _regenerator['default'].mark(function _callee() {
      var app;
      return _regenerator['default'].wrap(function _callee$(_context) {
        while (1)
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return _core.NestFactory.create(
                _app.AppModule,
                new _platformFastify.FastifyAdapter({
                  logger: true
                }),
                {
                  cors: true
                }
              );
            case 2:
              app = _context.sent;
              app.useGlobalPipes(
                new _common.ValidationPipe({
                  transform: true,
                  whitelist: true,
                  forbidNonWhitelisted: true
                })
              );
              app.enableVersioning({
                type: _common.VersioningType.URI,
                defaultVersion: '1'
              });

              // const document = SwaggerModule.createDocument(app, swaggerConfig);
              // SwaggerModule.setup('documentation', app, document);
              _context.next = 7;
              return app.listen(_app.AppModule.port, '0.0.0.0');
            case 7:
              _context.t0 = _common.Logger;
              _context.t1 = 'Application is running on: ';
              _context.next = 11;
              return app.getUrl();
            case 11:
              _context.t2 = _context.sent;
              _context.t3 = _context.t1.concat.call(_context.t1, _context.t2);
              _context.t0.log.call(_context.t0, _context.t3);
            case 14:
            case 'end':
              return _context.stop();
          }
      }, _callee);
    })
  );
  return _bootstrap.apply(this, arguments);
}
bootstrap();
