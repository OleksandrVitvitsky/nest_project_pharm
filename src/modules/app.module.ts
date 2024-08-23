import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from '../config/configuration';
import { CompaniesModule } from './companies/companies.module';
import { ProducersModule } from './nomenclature/producers/producers.module';
import { ProductsModule } from './nomenclature/products/products.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { RestsModule } from './rests/rests.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PharmaciesModule,
    ProducersModule,
    ProductsModule,
    RestsModule,
    UsersModule,
    CompaniesModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
