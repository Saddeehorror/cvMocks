import { Test, TestingModule } from '@nestjs/testing';
import { DispensaryService } from './dispensary.service';

describe('DispensaryService', () => {
  let service: DispensaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispensaryService],
    }).compile();

    service = module.get<DispensaryService>(DispensaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
