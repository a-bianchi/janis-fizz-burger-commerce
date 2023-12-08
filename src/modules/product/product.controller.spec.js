import { Test } from '@nestjs/testing';
import { ProductController } from './product.controller';

describe('Product Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ProductController]
    }).compile();

    controller = module.get(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
