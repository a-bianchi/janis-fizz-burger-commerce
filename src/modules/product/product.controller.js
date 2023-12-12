import {
  Controller,
  Dependencies,
  Bind,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  ParseUUIDPipe,
  NotFoundException,
  BadRequestException,
  UsePipes
} from '@nestjs/common';
import { ProductService } from './product.service';
import { RequestValidationPipe } from '../../middlewares/request-validation/request-validation.pipe';
import { QueryParamPipe } from '../../middlewares/query-param/query-param.pipe';
import { ProductCreateDto } from './dtos/product.create.dto';
import { ProductUpdateDto } from './dtos/product.update.dto';

@Controller('products')
@Dependencies(ProductService)
export class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  @Post()
  @UsePipes(new RequestValidationPipe(ProductCreateDto))
  @Bind(Body())
  async create(productData) {
    const lowercaseName = productData.name.toLowerCase();
    const exists = await this.productService.findProductByNormalizedName(lowercaseName);

    if(exists) 
      throw new BadRequestException('Product already exists');

    return this.productService.createProduct(productData);
  }

  @Get()
  @UsePipes(new QueryParamPipe())
  @Bind(Query())
  async findAll(queryParams) {
    const { query, sort } = queryParams;
    return this.productService.findAllProducts(query, sort);
  }

  @Get(':id')
  @Bind(Param('id', new ParseUUIDPipe()))
  async findOne(id) {
    const product = await this.productService.findProductById(id);

    if(!product) 
      throw new NotFoundException('Product not found');

    return product;
  }

  @Put(':id')
  @UsePipes(new RequestValidationPipe(ProductUpdateDto))
  @Bind(Param('id', new ParseUUIDPipe()), Body())
  async update(id, productData) {
    return this.productService.updateProduct(id, productData);
  }

  @Delete(':id')
  @Bind(Param('id', new ParseUUIDPipe()))
  async remove(id) {
    const product = await this.productService.findProductById(id);

    if(!product) 
      throw new NotFoundException('Product not exits');

    await this.productService.deleteProduct(id);

    return product;
  }
}
