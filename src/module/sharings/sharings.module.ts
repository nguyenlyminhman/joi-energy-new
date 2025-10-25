import { Module } from '@nestjs/common';
import { SharingsService } from './sharings.service';

@Module({
  providers: [SharingsService]
})
export class SharingsModule {}
