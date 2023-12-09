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
      lean: jest.fn().mockReturnThis(),
      exec: jest.fn(),
      createIndexes: jest.fn().mockResolvedValue(),
      save: jest.fn().mockResolvedValue({ toObject: jest.fn(() => ({ id: 'mockId' })) }),
      findOne: jest.fn(),
      findOneAndUpdate: jest.fn(),
      findOneAndDelete: jest.fn()
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

  describe('deleteProduct', () => {
    it('should delete a product by ID', async () => {
      const mockProductId = 'mockId';
      jest.spyOn(productService.productModel, 'findOneAndDelete').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce({ id: mockProductId })
      });

      const deletedProduct = await productService.deleteProduct(mockProductId);
      expect(deletedProduct.id).toEqual(mockProductId);
    });
  });

  describe('updateProduct', () => {
    it('should update a product by ID', async () => {
      const mockProductId = 'mockId';
      const mockProductData = { name: 'Updated Product' };
      jest.spyOn(productService.productModel, 'findOneAndUpdate').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce({ toObject: jest.fn(() => ({ id: mockProductId })) })
      });

      const updatedProduct = await productService.updateProduct(mockProductId, mockProductData);
      expect(updatedProduct.id).toEqual(mockProductId);
    });
  });

  describe('findAllProducts', () => {
    it('should find all products with given query and sort', async () => {
      const mockQuery = { name: 'MockProduct' };
      const mockSort = { name: 'asc' };
      jest.spyOn(productService.productModel, 'find').mockReturnValueOnce({
        sort: jest.fn().mockReturnValueOnce({ select: jest.fn().mockReturnValueOnce({ exec: jest.fn() }) })
      });

      await productService.findAllProducts(mockQuery, mockSort);
      expect(productService.productModel.find).toHaveBeenCalledWith(mockQuery);
    });
  });

  describe('findProductById', () => {
    it('should find a product by ID', async () => {
      const mockProductId = 'mockId';
      jest.spyOn(productService.productModel, 'findOne').mockReturnValueOnce({
        select: jest.fn().mockReturnValueOnce({ exec: jest.fn().mockResolvedValueOnce({ id: mockProductId }) })
      });

      const foundProduct = await productService.findProductById(mockProductId);
      expect(foundProduct.id).toEqual(mockProductId);
    });
  });

  describe('findProductByNormalizedName', () => {
    it('should find a product by normalized name', async () => {
      const mockNormalizedName = 'mock-product';
      jest.spyOn(productService.productModel, 'findOne').mockReturnValueOnce({
        select: jest.fn().mockReturnValueOnce({ exec: jest.fn().mockResolvedValueOnce({ normalizedName: mockNormalizedName }) })
      });

      const foundProduct = await productService.findProductByNormalizedName(mockNormalizedName);
      expect(foundProduct.normalizedName).toEqual(mockNormalizedName);
    });
  });

});
