import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export const ProductType = {
  Burger: 'burger',
  Condiments: 'condiments',
  Snacks: 'snacks',
  Drinks: 'drinks'
};

@Schema()
export class Product {
  @Prop({ required: true, type: String })
    name;

  @Prop({ required: true, enum: Object.values(ProductType), type: String })
    type;

  @Prop({ required: true, type: Number })
    price;

  @Prop({
    type: String,
    default:
      'https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg'
  })
    image;

  @Prop({ type: Boolean, default: false })
    isPromotion;

  @Prop({
    type: Number,
    default: 0,
    validate: [val => val >= 0, 'Discount must be a positive number']
  })
    discount;

  @Prop({
    type: [String],
    required: true,
    validate: [val => val.length > 0, 'Ingredients cannot be empty']
  })
    ingredients;

  @Prop({ type: String, default: 'active', enum: ['active', 'inactive'] })
    status;

  @Prop({ type: Date, default: Date.now })
    dateCreated;

  @Prop({ type: Date, default: Date.now })
    dateModified;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
