import { Test, TestingModule } from '@nestjs/testing';
import { GraficOperationService } from './grafic-operation.service';

describe('GraficOperationService', () => {
  let service: GraficOperationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraficOperationService],
    }).compile();

    service = module.get<GraficOperationService>(GraficOperationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
