import { Module } from '@nestjs/common';
import { PharmGroupsModule } from "../pharm-groups/pharm-groups.module";

import { ProducersModule } from '../producers/producers.module';
import { SubstancesModule } from "../substances/substances.module";
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [ProducersModule, SubstancesModule,PharmGroupsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
