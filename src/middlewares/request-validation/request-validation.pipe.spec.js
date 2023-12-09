import { BadRequestException } from '@nestjs/common';
import { RequestValidationPipe } from './request-validation.pipe';
import { ProductCreateDto } from '../../modules/product/dtos/product.create.dto';

describe('RequestValidationPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new RequestValidationPipe(ProductCreateDto);
  });

  it('should the same object value', async () => {
    const value = {
      name: 'Coca cola 1',
      type: 'drinks',
      price: 6,
      image: 'https://example.com/burger.jpg',
      isPromotion: true,
      discount: 2.5,
      ingredients: ['sugar'],
      status: 'active'
    };

    const response = await pipe.transform(value, null);
    expect(value).toBe(response);

  });

  it('should throw BadRequestException if isPromotion is false and discount is provided', async () => {
    const value = {
      name: 'Coca cola',
      type: 'drinks',
      price: 6,
      image: 'https://example.com/burger.jpg',
      isPromotion: false,
      discount: 2.5,
      ingredients: ['sugar'],
      status: 'active'
    };

    try {
      await pipe.transform(value, null);
    } catch(error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toBe("If 'isPromotion' is false, 'discount' should not be provided.");
    }
  });

  it('should throw BadRequestException name bad type', async () => {
    const value = {
      name: 1,
      type: 'drinks',
      price: 6,
      image: 'https://example.com/burger.jpg',
      isPromotion: true,
      discount: 2.5,
      ingredients: ['sugar'],
      status: 'active'
    };

    try {
      await pipe.transform(value, null);
    } catch(error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toBe('name: name must be a string, ');
    }
  });

  it('should throw BadRequestException for invalid type', async () => {
    const value = {
      name: 'Burger',
      type: 'invalidType',
      price: 6,
      image: 'https://example.com/burger.jpg',
      isPromotion: true,
      discount: 2.5,
      ingredients: ['sugar']
    };

    try {
      await pipe.transform(value, null);
    } catch(error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toContain('type: Invalid type');
    }
  });

  it('should throw BadRequestException for invalid price', async () => {
    const value = {
      name: 'Burger',
      type: 'drinks',
      price: -1,
      image: 'https://example.com/burger.jpg',
      isPromotion: true,
      discount: 2.5,
      ingredients: ['sugar']
    };

    try {
      await pipe.transform(value, null);
    } catch(error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toContain('price: price must be a positive number, ');
    }
  });

  it('should throw BadRequestException for invalid image URL', async () => {
    const value = {
      name: 'Burger',
      type: 'drinks',
      price: 6,
      image: 'invalid-url',
      isPromotion: true,
      discount: 2.5,
      ingredients: ['sugar']
    };

    try {
      await pipe.transform(value, null);
    } catch(error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toContain('image must be a URL address,');
    }
  });

  it('should throw BadRequestException for empty ingredients', async () => {
    const value = {
      name: 'Burger',
      type: 'drinks',
      price: 6,
      image: 'https://example.com/burger.jpg',
      isPromotion: true,
      discount: 2.5,
      ingredients: []
    };

    try {
      await pipe.transform(value, null);
    } catch(error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toContain('ingredients: Ingredients cannot be empty, ingredients: ingredients should not be empty, ');
    }
  });
});
