/* eslint-disable no-underscore-dangle */
import { Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';
import { Product } from './schemas/product.schema';

@Dependencies(getModelToken(Product.name))
export class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  async createProduct(productData) {
    this.productModel.createIndexes({ name: 1 }, { unique: true });

    const lowercaseName = productData.name.toLowerCase();
    productData.normalizedName = lowercaseName;

    productData.id = uuid();
    // eslint-disable-next-line new-cap
    const createdProduct = new this.productModel(productData);

    const savedProduct = await createdProduct.save();
    const product = savedProduct.toObject();

    return { id: product.id };
  }

  async findAllProducts() {
    return this.productModel.find().select('-__v')
      .select('-_id')
      .exec();
  }

  async findProductById(id) {
    return this.productModel
      .findOne({ id })
      .select('-__v')
      .select('-_id')
      .exec();
  }

  async findProductByNormalizedName(normalizedName) {
    return this.productModel
      .findOne({ normalizedName })
      .select('-__v')
      .select('-_id')
      .exec();
  }

  async updateProduct(id, productData) {
    delete productData.id;
    productData.dateModified = Date.now();

    const updateProduct = await this.productModel
      .findOneAndUpdate({
        id
      }, productData, { new: true })
      .exec();
    const product = updateProduct.toObject();

    return { id: product.id };
  }

  async deleteProduct(id) {
    return this.productModel.findOneAndDelete({ id }).select('-_id')
      .exec();
  }
}
