/* eslint-disable no-underscore-dangle */
import { Dependencies } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ProductRepository } from './product.repository';

@Dependencies(ProductRepository)
export class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async createProduct(productData) {
    const lowercaseName = productData.name.toLowerCase();
    productData.normalizedName = lowercaseName;
    productData.id = uuid();

    const savedProduct = await this.productRepository.create(productData);

    return { id: savedProduct.id };
  }

  async findAllProducts(query, sort) {
    return this.productRepository.find(query, sort);
  }

  async findProductById(id) {
    return this.productRepository.findOne({ id });
  }

  async findProductByNormalizedName(normalizedName) {
    return this.productRepository.findOne({ normalizedName });
  }

  async updateProduct(id, productData) {
    delete productData.id;
    productData.dateModified = Date.now();

    const updateProduct = await this.productRepository.update(
      {
        id
      },
      productData,
      { new: true }
    );

    return { id: updateProduct.id };
  }

  async deleteProduct(id) {
    return this.productRepository.delete(id);
  }
}
