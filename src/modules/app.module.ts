import path from 'node:path';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigType, PostgresConfig } from '../config/config.type';
import configuration from '../config/configuration';
import { UserEntity } from '../database/entities/user.entity';
import { CompaniesModule } from './companies/companies.module';
import { ProducersModule } from './nomenclature/producers/producers.module';
import { ProductsModule } from './nomenclature/products/products.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { PostgresModule } from './postgres/postgres.module';
import { RestsModule } from './rests/rests.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PostgresModule
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
