'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ProductController = void 0;
var _regenerator = _interopRequireDefault(
  require('@babel/runtime/regenerator')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
);
var _applyDecoratedDescriptor2 = _interopRequireDefault(
  require('@babel/runtime/helpers/applyDecoratedDescriptor')
);
var _common = require('@nestjs/common');
var _product = require('./product.service');
var _dec,
  _dec2,
  _dec3,
  _dec4,
  _dec5,
  _dec6,
  _dec7,
  _dec8,
  _dec9,
  _dec10,
  _dec11,
  _class,
  _class2;
// import ProductSchema from './schema/product.schema';
var ProductController = (exports.ProductController =
  ((_dec = (0, _common.Controller)('products')),
  (_dec2 = (0, _common.Dependencies)(_product.ProductService)),
  (_dec3 = (0, _common.Post)()),
  (_dec4 = (0, _common.Bind)((0, _common.Body)())),
  (_dec5 = (0, _common.Get)()),
  (_dec6 = (0, _common.Get)(':id')),
  (_dec7 = (0, _common.Bind)((0, _common.Param)('id'))),
  (_dec8 = (0, _common.Put)(':id')),
  (_dec9 = (0, _common.Bind)((0, _common.Param)('id'), (0, _common.Body)())),
  (_dec10 = (0, _common.Delete)(':id')),
  (_dec11 = (0, _common.Bind)((0, _common.Param)('id'))),
  _dec(
    (_class =
      _dec2(
        (_class =
          ((_class2 = /*#__PURE__*/ (function () {
            function ProductController(productService) {
              (0, _classCallCheck2['default'])(this, ProductController);
              this.productService = productService;
            }
            (0, _createClass2['default'])(ProductController, [
              {
                key: 'create',
                value: (function () {
                  var _create = (0, _asyncToGenerator2['default'])(
                    /*#__PURE__*/ _regenerator['default'].mark(
                      function _callee(productData) {
                        return _regenerator['default'].wrap(
                          function _callee$(_context) {
                            while (1)
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  console.log('productData', productData);
                                  return _context.abrupt(
                                    'return',
                                    this.productService.createProduct(
                                      productData
                                    )
                                  );
                                case 2:
                                case 'end':
                                  return _context.stop();
                              }
                          },
                          _callee,
                          this
                        );
                      }
                    )
                  );
                  function create(_x) {
                    return _create.apply(this, arguments);
                  }
                  return create;
                })()
              },
              {
                key: 'findAll',
                value: (function () {
                  var _findAll = (0, _asyncToGenerator2['default'])(
                    /*#__PURE__*/ _regenerator['default'].mark(
                      function _callee2() {
                        return _regenerator['default'].wrap(
                          function _callee2$(_context2) {
                            while (1)
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  return _context2.abrupt(
                                    'return',
                                    this.productService.findAllProducts()
                                  );
                                case 1:
                                case 'end':
                                  return _context2.stop();
                              }
                          },
                          _callee2,
                          this
                        );
                      }
                    )
                  );
                  function findAll() {
                    return _findAll.apply(this, arguments);
                  }
                  return findAll;
                })()
              },
              {
                key: 'findOne',
                value: (function () {
                  var _findOne = (0, _asyncToGenerator2['default'])(
                    /*#__PURE__*/ _regenerator['default'].mark(
                      function _callee3(id) {
                        return _regenerator['default'].wrap(
                          function _callee3$(_context3) {
                            while (1)
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  return _context3.abrupt(
                                    'return',
                                    this.productService.findProductById(id)
                                  );
                                case 1:
                                case 'end':
                                  return _context3.stop();
                              }
                          },
                          _callee3,
                          this
                        );
                      }
                    )
                  );
                  function findOne(_x2) {
                    return _findOne.apply(this, arguments);
                  }
                  return findOne;
                })()
              },
              {
                key: 'update',
                value: (function () {
                  var _update = (0, _asyncToGenerator2['default'])(
                    /*#__PURE__*/ _regenerator['default'].mark(
                      function _callee4(id, productData) {
                        return _regenerator['default'].wrap(
                          function _callee4$(_context4) {
                            while (1)
                              switch ((_context4.prev = _context4.next)) {
                                case 0:
                                  return _context4.abrupt(
                                    'return',
                                    this.productService.updateProduct(
                                      id,
                                      productData
                                    )
                                  );
                                case 1:
                                case 'end':
                                  return _context4.stop();
                              }
                          },
                          _callee4,
                          this
                        );
                      }
                    )
                  );
                  function update(_x3, _x4) {
                    return _update.apply(this, arguments);
                  }
                  return update;
                })()
              },
              {
                key: 'remove',
                value: (function () {
                  var _remove = (0, _asyncToGenerator2['default'])(
                    /*#__PURE__*/ _regenerator['default'].mark(
                      function _callee5(id) {
                        return _regenerator['default'].wrap(
                          function _callee5$(_context5) {
                            while (1)
                              switch ((_context5.prev = _context5.next)) {
                                case 0:
                                  return _context5.abrupt(
                                    'return',
                                    this.productService.deleteProduct(id)
                                  );
                                case 1:
                                case 'end':
                                  return _context5.stop();
                              }
                          },
                          _callee5,
                          this
                        );
                      }
                    )
                  );
                  function remove(_x5) {
                    return _remove.apply(this, arguments);
                  }
                  return remove;
                })()
              }
            ]);
            return ProductController;
          })()),
          ((0, _applyDecoratedDescriptor2['default'])(
            _class2.prototype,
            'create',
            [_dec3, _dec4],
            Object.getOwnPropertyDescriptor(_class2.prototype, 'create'),
            _class2.prototype
          ),
          (0, _applyDecoratedDescriptor2['default'])(
            _class2.prototype,
            'findAll',
            [_dec5],
            Object.getOwnPropertyDescriptor(_class2.prototype, 'findAll'),
            _class2.prototype
          ),
          (0, _applyDecoratedDescriptor2['default'])(
            _class2.prototype,
            'findOne',
            [_dec6, _dec7],
            Object.getOwnPropertyDescriptor(_class2.prototype, 'findOne'),
            _class2.prototype
          ),
          (0, _applyDecoratedDescriptor2['default'])(
            _class2.prototype,
            'update',
            [_dec8, _dec9],
            Object.getOwnPropertyDescriptor(_class2.prototype, 'update'),
            _class2.prototype
          ),
          (0, _applyDecoratedDescriptor2['default'])(
            _class2.prototype,
            'remove',
            [_dec10, _dec11],
            Object.getOwnPropertyDescriptor(_class2.prototype, 'remove'),
            _class2.prototype
          )),
          _class2))
      ) || _class)
  ) || _class));
