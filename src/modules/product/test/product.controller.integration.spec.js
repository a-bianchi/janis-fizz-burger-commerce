import { Test } from '@nestjs/testing';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import request from 'supertest';
import { v4 as uuid } from 'uuid';
import { AppModule } from '../../app/app.module';
import { productCreateMock, productUpdateMock } from './mocks/product.mocks';

describe('Products Controller Integration', () => {
  let httpServer;
  let app;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleRef.createNestApplication(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance()
      .ready();
    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Server Status', () => {
    it('should return server status', async () => {
      const response = await request(httpServer).get('/ping');
      expect(response.status).toBe(200);
      expect(response.text).toEqual('OK');
    });
  });

  describe('Endpoint post products', () => {
    it('should return an id product', async () => {
      const response = await request(httpServer).post('/products')
        .send(productCreateMock);
      expect(response.status).toBe(201);
      expect(typeof response.body.id).toBe('string');

      const isValidUUID = uuid(response.body.id, { version: 4 });
      expect(isValidUUID).toBeTruthy();
    });
  });

  describe('Endpoint put products', () => {
    it('should return an id product', async () => {
      const products = await request(httpServer).get('/products');
      const product = products.body[0];
      const response = await request(httpServer).put(`/products/${product.id}`)
        .send(productUpdateMock);
      expect(response.status).toBe(200);
      expect(typeof response.body.id).toBe('string');

      const isValidUUID = uuid(response.body.id, { version: 4 });
      expect(isValidUUID).toBeTruthy();
    });
  });

  describe('Endpoint get product', () => {
    it('should return an id product', async () => {
      const products = await request(httpServer).get('/products');
      const product = products.body[0];
      const response = await request(httpServer).get(`/products/${product.id}`);
      expect(response.status).toBe(200);
      expect(response.body).toMatchObject(product);
    });
  });

  describe('Endpoint delete product', () => {
    it('should return an id product', async () => {
      const products = await request(httpServer).get('/products');
      const product = products.body[0];
      const response = await request(httpServer).delete(`/products/${product.id}`);
      expect(response.status).toBe(200);
      expect(typeof response.body.id).toBe('string');

      const isValidUUID = uuid(response.body.id, { version: 4 });
      expect(isValidUUID).toBeTruthy();
    });
  });
});
