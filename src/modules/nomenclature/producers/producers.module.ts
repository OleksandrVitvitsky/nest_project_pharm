import { Module } from '@nestjs/common';

import { ProducersController } from './producers.controller';
import { ProducersService } from './producers.service';

@Module({
  controllers: [ProducersController],
  providers: [ProducersService],
  exports: [ProducersService],
})
export class ProducersModule {}
