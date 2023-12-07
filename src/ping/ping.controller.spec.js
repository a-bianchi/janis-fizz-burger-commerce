import { Test } from '@nestjs/testing';
import { PingController } from './ping.controller';

describe('PingController', () => {
  let pingController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [PingController],
      providers: []
    }).compile();

    pingController = app.get(PingController);
  });

  describe('root', () => {
    it('should return "OK"', () => {
      expect(pingController.ping()).toBe('OK');
    });
  });
});
