import { Test, TestingModule } from '@nestjs/testing';
import { DispensaryController } from './dispensary.controller';
import { DispensaryService } from './dispensary.service';

describe('DispensaryController', () => {
  let controller: DispensaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispensaryController],
      providers: [DispensaryService],
    }).compile();

    controller = module.get<DispensaryController>(DispensaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
