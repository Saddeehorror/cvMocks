import { Test, TestingModule } from '@nestjs/testing';
import { DuctsService } from './ducts.service';

describe('DuctsService', () => {
  let service: DuctsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuctsService],
    }).compile();

    service = module.get<DuctsService>(DuctsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
