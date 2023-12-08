import { Schema, model } from 'mongoose';

const ProductType = {
  Burger: 'burger',
  Condiments: 'condiments',
  Snacks: 'snacks',
  Drinks: 'drinks'
};

const productSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: Object.values(ProductType) },
  price: { type: Number, required: true },
  image: { type: String, default: 'https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg' },
  isPromotion: { type: Boolean, default: false },
  discount: {
    type: Number,
    default: 0,
    validate: [val => val >= 0, 'Discount must be a positive number']
  },
  ingredients: {
    type: [String],
    required: true,
    validate: [val => val.length > 0, 'Ingredients cannot be empty']
  },
  status: { type: String, default: 'active', enum: ['active', 'inactive'] },
  dateCreated: { type: Date, default: Date.now },
  dateModified: { type: Date, default: Date.now }
});

const Product = model('Product', productSchema);

export default Product;
