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
    it('should return an array of cats', async () => {
      const queryParams = {
        query: { },
        sort: { }
      };
      const result = ['test'];
      jest
        .spyOn(productService, 'findAllProducts')
        .mockImplementation(() => result);

      expect(await productController.findAll(queryParams)).toBe(result);
    });
  });
});
