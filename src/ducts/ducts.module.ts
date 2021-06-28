import { Module } from '@nestjs/common';
import { DuctsService } from './ducts.service';
import { DuctsController } from './ducts.controller';

@Module({
  controllers: [DuctsController],
  providers: [DuctsService]
})
export class DuctsModule {}
