import { Module } from '@nestjs/common';
import { WatterWellService } from './watter-well.service';
import { WatterWellController } from './watter-well.controller';

@Module({
  controllers: [WatterWellController],
  providers: [WatterWellService]
})
export class WatterWellModule {}
