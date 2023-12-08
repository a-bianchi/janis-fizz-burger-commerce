import { Test } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProductService]
    }).compile();

    service = module.get(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
