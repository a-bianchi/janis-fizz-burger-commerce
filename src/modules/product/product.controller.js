import {
  Controller,
  Dependencies,
  Bind,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { ProductService } from './product.service';
// import ProductSchema from './schema/product.schema';

@Controller('products')
@Dependencies(ProductService)
export class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  @Post()
  @Bind(Body())
  async create(productData) {
    return this.productService.createProduct(productData);
  }

  @Get()
  async findAll() {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  @Bind(Param('id'))
  async findOne(id) {
    return this.productService.findProductById(id);
  }

  @Put(':id')
  @Bind(Param('id'), Body())
  async update(id, productData) {
    return this.productService.updateProduct(id, productData);
  }

  @Delete(':id')
  @Bind(Param('id'))
  async remove(id) {
    return this.productService.deleteProduct(id);
  }
}
