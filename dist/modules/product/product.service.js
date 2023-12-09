'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ProductService = void 0;
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
var _common = require('@nestjs/common');
var _mongoose = require('@nestjs/mongoose');
var _dec, _class;
var ProductService = (exports.ProductService =
  ((_dec = (0, _common.Injectable)()),
  _dec(
    (_class = /*#__PURE__*/ (function () {
      function ProductService(
        @((0, _mongoose.InjectModel)('Product'))
        productModel
      ) {
        (0, _classCallCheck2['default'])(this, ProductService);
        this.productModel = productModel;
      }
      (0, _createClass2['default'])(ProductService, [
        {
          key: 'createProduct',
          value: (function () {
            var _createProduct = (0, _asyncToGenerator2['default'])(
              /*#__PURE__*/ _regenerator['default'].mark(
                function _callee(productData) {
                  var createdProduct;
                  return _regenerator['default'].wrap(
                    function _callee$(_context) {
                      while (1)
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            createdProduct = new this.productModel(productData);
                            return _context.abrupt(
                              'return',
                              createdProduct.save()
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
            function createProduct(_x) {
              return _createProduct.apply(this, arguments);
            }
            return createProduct;
          })()
        },
        {
          key: 'findAllProducts',
          value: (function () {
            var _findAllProducts = (0, _asyncToGenerator2['default'])(
              /*#__PURE__*/ _regenerator['default'].mark(function _callee2() {
                return _regenerator['default'].wrap(
                  function _callee2$(_context2) {
                    while (1)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return _context2.abrupt(
                            'return',
                            this.productModel.find().exec()
                          );
                        case 1:
                        case 'end':
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  this
                );
              })
            );
            function findAllProducts() {
              return _findAllProducts.apply(this, arguments);
            }
            return findAllProducts;
          })()
        },
        {
          key: 'findProductById',
          value: (function () {
            var _findProductById = (0, _asyncToGenerator2['default'])(
              /*#__PURE__*/ _regenerator['default'].mark(function _callee3(id) {
                return _regenerator['default'].wrap(
                  function _callee3$(_context3) {
                    while (1)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return _context3.abrupt(
                            'return',
                            this.productModel.findById(id).exec()
                          );
                        case 1:
                        case 'end':
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  this
                );
              })
            );
            function findProductById(_x2) {
              return _findProductById.apply(this, arguments);
            }
            return findProductById;
          })()
        },
        {
          key: 'updateProduct',
          value: (function () {
            var _updateProduct = (0, _asyncToGenerator2['default'])(
              /*#__PURE__*/ _regenerator['default'].mark(
                function _callee4(id, productData) {
                  return _regenerator['default'].wrap(
                    function _callee4$(_context4) {
                      while (1)
                        switch ((_context4.prev = _context4.next)) {
                          case 0:
                            return _context4.abrupt(
                              'return',
                              this.productModel
                                .findByIdAndUpdate(id, productData, {
                                  new: true
                                })
                                .exec()
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
            function updateProduct(_x3, _x4) {
              return _updateProduct.apply(this, arguments);
            }
            return updateProduct;
          })()
        },
        {
          key: 'deleteProduct',
          value: (function () {
            var _deleteProduct = (0, _asyncToGenerator2['default'])(
              /*#__PURE__*/ _regenerator['default'].mark(function _callee5(id) {
                return _regenerator['default'].wrap(
                  function _callee5$(_context5) {
                    while (1)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return _context5.abrupt(
                            'return',
                            this.productModel.findByIdAndDelete(id).exec()
                          );
                        case 1:
                        case 'end':
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  this
                );
              })
            );
            function deleteProduct(_x5) {
              return _deleteProduct.apply(this, arguments);
            }
            return deleteProduct;
          })()
        }
      ]);
      return ProductService;
    })())
  ) || _class));
