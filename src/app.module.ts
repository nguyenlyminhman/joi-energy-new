import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PricePlansModule } from './module/price-plans/price-plans.module';
import { ReadingsModule } from './module/readings/readings.module';
import { SharingsModule } from './module/sharings/sharings.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PricePlansModule,
    ReadingsModule,
    SharingsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
