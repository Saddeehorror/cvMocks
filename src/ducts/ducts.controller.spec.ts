import { Test, TestingModule } from '@nestjs/testing';
import { DuctsController } from './ducts.controller';
import { DuctsService } from './ducts.service';

describe('DuctsController', () => {
  let controller: DuctsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuctsController],
      providers: [DuctsService],
    }).compile();

    controller = module.get<DuctsController>(DuctsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
