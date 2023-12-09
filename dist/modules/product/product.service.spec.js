'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _regenerator = _interopRequireDefault(
  require('@babel/runtime/regenerator')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _testing = require('@nestjs/testing');
var _product = require('./product.service');
describe('ProductService', function () {
  var service;
  beforeEach(
    /*#__PURE__*/ (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee() {
        var module;
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1)
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2;
                return _testing.Test.createTestingModule({
                  providers: [_product.ProductService]
                }).compile();
              case 2:
                module = _context.sent;
                service = module.get(_product.ProductService);
              case 4:
              case 'end':
                return _context.stop();
            }
        }, _callee);
      })
    )
  );
  it('should be defined', function () {
    expect(service).toBeDefined();
  });
});
