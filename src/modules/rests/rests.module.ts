import { Module } from '@nestjs/common';
import { PharmGroupsModule } from "../nomenclature/pharm-groups/pharm-groups.module";
import { SubstancesModule } from "../nomenclature/substances/substances.module";

import { PharmaciesModule } from '../pharmacies/pharmacies.module';
import { ProducersModule } from '../nomenclature/producers/producers.module';
import { ProductsModule } from '../nomenclature/products/products.module';
import { RestsController } from './rests.controller';
import { RestsService } from './rests.service';

@Module({
  imports: [ProductsModule, ProducersModule, PharmaciesModule,PharmGroupsModule,SubstancesModule],
  controllers: [RestsController],
  providers: [RestsService],
})
export class RestsModule {}
