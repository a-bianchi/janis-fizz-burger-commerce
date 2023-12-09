'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _regenerator = _interopRequireDefault(
  require('@babel/runtime/regenerator')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _testing = require('@nestjs/testing');
var _ping = require('./ping.controller');
describe('PingController', function () {
  var pingController;
  beforeEach(
    /*#__PURE__*/ (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee() {
        var app;
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1)
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2;
                return _testing.Test.createTestingModule({
                  controllers: [_ping.PingController],
                  providers: []
                }).compile();
              case 2:
                app = _context.sent;
                pingController = app.get(_ping.PingController);
              case 4:
              case 'end':
                return _context.stop();
            }
        }, _callee);
      })
    )
  );
  describe('root', function () {
    it('should return "OK"', function () {
      expect(pingController.ping()).toBe('OK');
    });
  });
});
