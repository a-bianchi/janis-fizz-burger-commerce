import { Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';

@Dependencies(getModelToken(Product.name))
export class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  async createProduct(productData) {
    // eslint-disable-next-line new-cap
    const createdProduct = new this.productModel(productData);
    return createdProduct.save();
  }

  async findAllProducts() {
    return this.productModel.find().exec();
  }

  async findProductById(id) {
    return this.productModel.findById(id).exec();
  }

  async updateProduct(id, productData) {
    return this.productModel
      .findByIdAndUpdate(id, productData, { new: true })
      .exec();
  }

  async deleteProduct(id) {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
