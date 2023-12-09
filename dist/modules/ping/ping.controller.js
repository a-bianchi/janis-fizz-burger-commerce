'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.PingController = void 0;
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
var _swagger = require('@nestjs/swagger');
var _dec, _dec2, _dec3, _dec4, _class, _class2;
var PingController = (exports.PingController =
  ((_dec = (0, _common.Controller)({
    version: _common.VERSION_NEUTRAL
  })),
  (_dec2 = (0, _common.Controller)('ping')),
  (_dec3 = (0, _swagger.ApiOkResponse)({
    description: 'Endpoint to check if the service is up and operational',
    type: String
  })),
  (_dec4 = (0, _common.Get)('/ping')),
  _dec(
    (_class =
      _dec2(
        (_class =
          ((_class2 = /*#__PURE__*/ (function () {
            function PingController() {
              (0, _classCallCheck2['default'])(this, PingController);
            }
            (0, _createClass2['default'])(PingController, [
              {
                key: 'ping',
                value: function ping() {
                  return 'OK';
                }
              }
            ]);
            return PingController;
          })()),
          (0, _applyDecoratedDescriptor2['default'])(
            _class2.prototype,
            'ping',
            [_dec3, _dec4],
            Object.getOwnPropertyDescriptor(_class2.prototype, 'ping'),
            _class2.prototype
          ),
          _class2))
      ) || _class)
  ) || _class));
