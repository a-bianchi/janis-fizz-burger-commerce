/* eslint-disable no-underscore-dangle */
import { Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';

@Dependencies(getModelToken(Product.name))
export class ProductRepository {
  constructor(productModel) {
    this.productModel = productModel;
  }

  async create(productData) {
    this.productModel.createIndexes({ name: 1 }, { unique: true });

    // eslint-disable-next-line new-cap
    const createdProduct = new this.productModel(productData);

    return createdProduct.save();
  }

  async find(query, sort) {
    let queryFind = this.productModel.find(query);
    if(sort)
      queryFind = queryFind.sort(sort);
    return queryFind.select('-_id -__v').exec();
  }

  async findOne(productFilterQuery) {
    return this.productModel
      .findOne(productFilterQuery)
      .select('-_id -__v')
      .exec();
  }

  async update(productFilterQuery, productData) {
    const updateProduct = await this.productModel
      .findOneAndUpdate(productFilterQuery, productData, { new: true })
      .exec();

    return updateProduct;
  }

  async delete(id) {
    return this.productModel.deleteMany({ id }).exec();
  }

}
