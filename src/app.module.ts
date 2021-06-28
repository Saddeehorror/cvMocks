import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetupModule } from './setup/setup.module';
import { WatterWellModule } from './watter-well/watter-well.module';
import { DispensaryModule } from './dispensary/dispensary.module';
import { DuctsModule } from './ducts/ducts.module';
import { ReceptionsModule } from './receptions/receptions.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { TanksModule } from './tanks/tanks.module';
import { GraficOperationModule } from './grafic-operation/grafic-operation.module';

@Module({
  imports: [SetupModule, WatterWellModule, DispensaryModule, DuctsModule, ReceptionsModule, DeliveriesModule, TanksModule, GraficOperationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
