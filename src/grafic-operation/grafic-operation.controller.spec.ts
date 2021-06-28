import { Test, TestingModule } from '@nestjs/testing';
import { GraficOperationController } from './grafic-operation.controller';
import { GraficOperationService } from './grafic-operation.service';

describe('GraficOperationController', () => {
  let controller: GraficOperationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraficOperationController],
      providers: [GraficOperationService],
    }).compile();

    controller = module.get<GraficOperationController>(GraficOperationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
