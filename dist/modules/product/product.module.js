'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ProductModule = void 0;
var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _common = require('@nestjs/common');
var _mongoose = require('@nestjs/mongoose');
var _product = require('./product.service');
var _product2 = require('./product.controller');
var _product3 = _interopRequireDefault(require('./schema/product.schema'));
var _dec, _class;
var ProductModule = (exports.ProductModule =
  ((_dec = (0, _common.Module)({
    imports: [
      _mongoose.MongooseModule.forFeature([
        {
          name: 'Product',
          schema: _product3['default']
        }
      ])
    ],
    providers: [_product.ProductService],
    controllers: [_product2.ProductController],
    exports: [_mongoose.MongooseModule, _product.ProductService]
  })),
  _dec(
    (_class = /*#__PURE__*/ (0, _createClass2['default'])(
      function ProductModule() {
        (0, _classCallCheck2['default'])(this, ProductModule);
      }
    ))
  ) || _class));
