import { Module } from '@nestjs/common';
import { SubstancesService } from './substances.service';
import { SubstancesController } from './substances.controller';

@Module({
  controllers: [SubstancesController],
  providers: [SubstancesService],
  exports: [SubstancesService],
})
export class SubstancesModule {}
