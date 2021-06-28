import { Test, TestingModule } from '@nestjs/testing';
import { WatterWellController } from './watter-well.controller';
import { WatterWellService } from './watter-well.service';

describe('WatterWellController', () => {
  let controller: WatterWellController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatterWellController],
      providers: [WatterWellService],
    }).compile();

    controller = module.get<WatterWellController>(WatterWellController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
