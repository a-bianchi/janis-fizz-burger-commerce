import { NotFoundException } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('Product Controller', () => {
  let productController;
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    productController = new ProductController(productService);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const queryParams = {
        query: { },
        sort: { }
      };
      const result = ['test'];
      jest
        .spyOn(productService, 'findAllProducts')
        .mockResolvedValue(result);

      expect(await productController.findAll(queryParams)).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single product by ID', async () => {
      const productId = 'sampleID';
      const product = { id: productId, name: 'Sample Product' };
      jest
        .spyOn(productService, 'findProductById')
        .mockResolvedValue(product);

      expect(await productController.findOne(productId)).toBe(product);
    });

    it('should throw a NotFoundException when product not found', async () => {
      const productId = 'nonExistingID';
      jest
        .spyOn(productService, 'findProductById')
        .mockResolvedValue(null);

      await expect(productController.findOne(productId)).rejects.toThrowError(
        NotFoundException
      );
    });
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const productData = {
        name: 'Coca cola',
        type: 'burger',
        price: 5,
        image: 'https://example.com/burger.jpg',
        isPromotion: true,
        discount: 2.5,
        ingredients: [
          'beef patty',
          'lettuce',
          'tomato',
          'cheddar cheese',
          'brioche bun'
        ],
        dateCreated: '2023-12-09T17:25:39.340Z',
        dateModified: '2023-12-09T17:25:39.340Z'
      };
      const createdProduct = { id: 'sampleID', ...productData };
      jest
        .spyOn(productService, 'findProductByNormalizedName')
        .mockResolvedValue(null);
      jest
        .spyOn(productService, 'createProduct')
        .mockResolvedValue(createdProduct);

      expect(await productController.create(productData)).toBe(createdProduct);
    });

    it('should throw a BadRequestException if product already exists', async () => {
      const productData = {
        name: 'Coca cola',
        type: 'burger',
        price: 5,
        image: 'https://example.com/burger.jpg',
        isPromotion: true,
        discount: 2.5,
        ingredients: [
          'beef patty',
          'lettuce',
          'tomato',
          'cheddar cheese',
          'brioche bun'
        ],
        dateCreated: '2023-12-09T17:25:39.340Z',
        dateModified: '2023-12-09T17:25:39.340Z'
      };
      jest
        .spyOn(productService, 'findProductByNormalizedName')
        .mockResolvedValue('Product already exists');

      await expect(productController.create(productData)).rejects.toThrowError(
        'Product already exists'
      );
    });
  });

  describe('update', () => {
    it('should update an existing product', async () => {
      const productId = 'sampleID';
      const productData = {
        type: 'burger',
        price: 5,
        image: 'https://example.com/burger.jpg',
        isPromotion: true,
        discount: 2.5,
        ingredients: [
          'beef patty',
          'lettuce',
          'tomato',
          'cheddar cheese',
          'brioche bun'
        ]
      };
      const updatedProduct = { id: productId };
      jest
        .spyOn(productService, 'updateProduct')
        .mockResolvedValue(updatedProduct);

      expect(await productController.update(productId, productData)).toBe(
        updatedProduct
      );
    });
  });

  describe('remove', () => {
    it('should remove an existing product', async () => {
      const productId = 'sampleID';
      const product = { id: productId };
      jest
        .spyOn(productService, 'findProductById')
        .mockResolvedValue(product);
      jest
        .spyOn(productService, 'deleteProduct')
        .mockResolvedValue(product);

      expect(await productController.remove(productId)).toBe(product);
    });

    it('should throw a NotFoundException if product not found', async () => {
      const productId = 'nonExistingID';
      jest
        .spyOn(productService, 'findProductById')
        .mockResolvedValue(null);

      await expect(productController.remove(productId)).rejects.toThrowError(
        NotFoundException
      );
    });
  });

});
