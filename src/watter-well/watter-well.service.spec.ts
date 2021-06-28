import { Test, TestingModule } from '@nestjs/testing';
import { WatterWellService } from './watter-well.service';

describe('WatterWellService', () => {
  let service: WatterWellService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatterWellService],
    }).compile();

    service = module.get<WatterWellService>(WatterWellService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
