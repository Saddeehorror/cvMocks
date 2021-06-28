import { Module } from '@nestjs/common';
import { DispensaryService } from './dispensary.service';
import { DispensaryController } from './dispensary.controller';

@Module({
  controllers: [DispensaryController],
  providers: [DispensaryService]
})
export class DispensaryModule {}
