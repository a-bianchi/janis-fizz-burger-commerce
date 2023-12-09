'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _mongoose = require('mongoose');
var ProductType = {
  Burger: 'burger',
  Condiments: 'condiments',
  Snacks: 'snacks',
  Drinks: 'drinks'
};
var ProductSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: Object.values(ProductType)
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default:
      'https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg'
  },
  isPromotion: {
    type: Boolean,
    default: false
  },
  discount: {
    type: Number,
    default: 0,
    validate: [
      function (val) {
        return val >= 0;
      },
      'Discount must be a positive number'
    ]
  },
  ingredients: {
    type: [String],
    required: true,
    validate: [
      function (val) {
        return val.length > 0;
      },
      'Ingredients cannot be empty'
    ]
  },
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'inactive']
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateModified: {
    type: Date,
    default: Date.now
  }
});
var _default = (exports['default'] = ProductSchema);
