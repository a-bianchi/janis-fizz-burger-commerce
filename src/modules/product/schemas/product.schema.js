import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export const ProductType = {
  Burger: 'burger',
  Condiments: 'condiments',
  Snacks: 'snacks',
  Drinks: 'drinks'
};

export const ProductTypeEnum = ['burger', 'condiments', 'snacks', 'drinks'];

export const StatusEnum = ['active', 'inactive'];

@Schema()
export class Product {
  @Prop({
    type: String,
    required: true,
    unique: true,
    auto: false,
    index: true
  })
    id;

  @Prop({ type: String, required: true, unique: true })
    name;

  @Prop({ type: String, index: true, required: true, unique: true })
    normalizedName;

  @Prop({ required: true, enum: Object.values(ProductType), type: String })
    type;

  @Prop({ required: true, type: Number })
    price;

  @Prop({
    type: String,
    default: 'https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg'
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

  @Prop({ type: String, default: 'active', enum: StatusEnum })
    status;

  @Prop({ type: Date, default: Date.now })
    dateCreated;

  @Prop({ type: Date, default: Date.now })
    dateModified;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
