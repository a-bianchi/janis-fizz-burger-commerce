'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.AppModule = void 0;
var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _common = require('@nestjs/common');
var _config = require('@nestjs/config');
var _mongoose = require('@nestjs/mongoose');
var _ping = require('../ping/ping.controller');
var _product = require('../product/product.module');
var _dec, _class, _class2;
var AppModule = (exports.AppModule =
  ((_dec = (0, _common.Module)({
    imports: [
      _config.ConfigModule.forRoot({
        isGlobal: true
      }),
      _mongoose.MongooseModule.forRoot('mongodb://localhost:27017/burger', {
        autoIndex: true
      }),
      _product.ProductModule
    ],
    controllers: [_ping.PingController],
    providers: []
  })),
  _dec(
    (_class =
      ((_class2 = /*#__PURE__*/ (0, _createClass2['default'])(
        function AppModule() {
          (0, _classCallCheck2['default'])(this, AppModule);
          var configService = new _config.ConfigService();
          console.log(process.env.MONGODB_URI);
          AppModule.port = +configService.get('PORT') || 3000;
        }
      )),
      (0, _defineProperty2['default'])(_class2, 'port', void 0),
      _class2))
  ) || _class));
