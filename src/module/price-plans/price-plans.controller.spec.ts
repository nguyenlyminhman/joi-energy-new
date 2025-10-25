import { Test, TestingModule } from '@nestjs/testing';
import { PricePlansController } from './price-plans.controller';

describe('PricePlansController', () => {
  let controller: PricePlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricePlansController],
    }).compile();

    controller = module.get<PricePlansController>(PricePlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
