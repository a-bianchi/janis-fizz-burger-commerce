import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ProductService } from './product.service';

describe('Product Service', () => {
  let productService;
  let mockProductModel;

  beforeEach(async () => {
    mockProductModel = {
      find: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      exec: jest.fn()
    };

    const module = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getModelToken('Product'),
          useValue: mockProductModel
        }
      ]
    }).compile();

    productService = module.get(ProductService);
  });

  it('should return all products', async () => {
    const mockProducts = [{ name: 'Product 1' }, { name: 'Product 2' }];
    mockProductModel.exec.mockResolvedValue(mockProducts);

    const result = await productService.findAllProducts();

    expect(result).toEqual(mockProducts);
    expect(mockProductModel.find).toHaveBeenCalled();
    expect(mockProductModel.exec).toHaveBeenCalled();
  });
});
