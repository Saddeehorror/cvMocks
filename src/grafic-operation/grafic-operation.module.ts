import { Module } from '@nestjs/common';
import { GraficOperationService } from './grafic-operation.service';
import { GraficOperationController } from './grafic-operation.controller';

@Module({
  controllers: [GraficOperationController],
  providers: [GraficOperationService],
})
export class GraficOperationModule {}
