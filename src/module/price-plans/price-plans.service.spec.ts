import { Test, TestingModule } from '@nestjs/testing';
import { PricePlansService } from './price-plans.service';

describe('PricePlansService', () => {
  let service: PricePlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PricePlansService],
    }).compile();

    service = module.get<PricePlansService>(PricePlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
