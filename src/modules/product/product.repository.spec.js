import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ProductRepository } from './product.repository';

describe('Product Repository', () => {
  let productRepository;
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
        ProductRepository,
        {
          provide: getModelToken('Product'),
          useValue: mockProductModel
        }
      ]
    }).compile();

    productRepository = module.get(ProductRepository);
  });

  describe('delete product', () => {
    it('should delete a product by ID', async () => {
      const mockProductId = 'mockId';
      jest.spyOn(productRepository.productModel, 'findOneAndDelete').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce({ id: mockProductId })
      });

      const deletedProduct = await productRepository.delete(mockProductId);
      expect(deletedProduct.id).toEqual(mockProductId);
    });
  });

  describe('update product', () => {
    it('should update a product by ID', async () => {
      const mockProductId = 'mockId';
      const mockProductData = { id: 'mockId', name: 'Updated Product' };
      jest.spyOn(productRepository.productModel, 'findOneAndUpdate').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce({ id: mockProductId, ...mockProductData })
      });

      const updatedProduct = await productRepository.update(mockProductId, mockProductData);
      console.log('updatedProduct', updatedProduct);
      expect(updatedProduct.id).toEqual(mockProductId);
    });
  });

  describe('find', () => {
    it('should find all products with given query and sort', async () => {
      const mockQuery = { name: 'MockProduct' };
      const mockSort = { name: 'asc' };
      jest.spyOn(productRepository.productModel, 'find').mockReturnValueOnce({
        sort: jest.fn().mockReturnValueOnce({ select: jest.fn().mockReturnValueOnce({ exec: jest.fn() }) })
      });

      await productRepository.find(mockQuery, mockSort);
      expect(productRepository.productModel.find).toHaveBeenCalledWith(mockQuery);
    });
  });

  describe('findOne', () => {
    it('should find a product by ID', async () => {
      const mockProductId = 'mockId';
      jest.spyOn(productRepository.productModel, 'findOne').mockReturnValueOnce({
        select: jest.fn().mockReturnValueOnce({ exec: jest.fn().mockResolvedValueOnce({ id: mockProductId }) })
      });

      const foundProduct = await productRepository.findOne(mockProductId);
      expect(foundProduct.id).toEqual(mockProductId);
    });
  });
});
