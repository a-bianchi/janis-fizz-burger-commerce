import { ProductService } from '../product.service';
import { ProductRepository } from '../product.repository';

describe('ProductService', () => {
  let productService;
  let productRepositoryMock;

  beforeEach(() => {
    productRepositoryMock = new ProductRepository();

    productService = new ProductService(productRepositoryMock);
  });

  describe('createProduct', () => {
    it('should create a product', async () => {
      const productData = { name: 'Test Product' };
      const mockSavedProduct = { id: 'mockId', ...productData };
      jest
        .spyOn(productRepositoryMock, 'create')
        .mockResolvedValueOnce(mockSavedProduct);

      const result = await productService.createProduct(productData);

      expect(productRepositoryMock.create).toHaveBeenCalledWith(productData);
      expect(result).toEqual({ id: mockSavedProduct.id });
    });
  });

  describe('findAllProducts', () => {
    it('should find all products with given query and sort', async () => {
      const mockQuery = { name: 'MockProduct' };
      const mockSort = { name: 'asc' };
      const mockProducts = [
        { id: '1', name: 'Product 1' },
        { id: '2', name: 'Product 2' }
      ];
      jest
        .spyOn(productRepositoryMock, 'find')
        .mockResolvedValueOnce(mockProducts);

      const result = await productService.findAllProducts(mockQuery, mockSort);

      expect(productRepositoryMock.find).toHaveBeenCalledWith(
        mockQuery,
        mockSort
      );
      expect(result).toEqual(mockProducts);
    });
  });

  describe('findProductById', () => {
    it('should find a product by ID', async () => {
      const mockProductId = 'sampleID';
      const mockProduct = { id: mockProductId, name: 'Sample Product' };
      jest
        .spyOn(productRepositoryMock, 'findOne')
        .mockResolvedValueOnce(mockProduct);

      const result = await productService.findProductById(mockProductId);

      expect(productRepositoryMock.findOne).toHaveBeenCalledWith({
        id: mockProductId
      });
      expect(result).toEqual(mockProduct);
    });
  });

  describe('updateProduct', () => {
    it('should update an existing product', async () => {
      const mockProductId = 'sampleID';
      const mockProductData = { name: 'Updated Product' };
      const updatedProduct = { id: mockProductId, ...mockProductData };
      jest
        .spyOn(productRepositoryMock, 'update')
        .mockResolvedValueOnce(updatedProduct);

      const result = await productService.updateProduct(
        mockProductId,
        mockProductData
      );

      expect(productRepositoryMock.update).toHaveBeenCalledWith(
        { id: mockProductId },
        mockProductData,
        { new: true }
      );
      expect(result).toEqual({ id: mockProductId });
    });
  });

  describe('deleteProduct', () => {
    it('should delete an existing product', async () => {
      const mockProductId = 'sampleID';
      const deletedProduct = { id: mockProductId };
      jest
        .spyOn(productRepositoryMock, 'delete')
        .mockResolvedValueOnce(deletedProduct);

      const result = await productService.deleteProduct(mockProductId);

      expect(productRepositoryMock.delete).toHaveBeenCalledWith(mockProductId);
      expect(result).toEqual({ id: mockProductId });
    });
  });

  describe('findProductByNormalizedName', () => {
    it('should find a product by normalized name', async () => {
      const mockNormalizedName = 'sample-product';
      const mockProduct = { normalizedName: mockNormalizedName };
      jest
        .spyOn(productRepositoryMock, 'findOne')
        .mockResolvedValueOnce(mockProduct);

      const result =
        await productService.findProductByNormalizedName(mockNormalizedName);

      expect(productRepositoryMock.findOne).toHaveBeenCalledWith({
        normalizedName: mockNormalizedName
      });
      expect(result).toEqual(mockProduct);
    });
  });
});
