import { APP_FILTER } from '@nestjs/core';
import path from 'node:path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalExceptionFilter } from '../common/http/global-exception.filter';



import configuration from '../config/configuration';

import { CompaniesModule } from './companies/companies.module';
import { LoggerModule } from './logger/logger.module';
import { ProducersModule } from './nomenclature/producers/producers.module';
import { ProductsModule } from './nomenclature/products/products.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { PostgresModule } from './postgres/postgres.module';
import { RepositoryModule } from './repository/repository.module';
import { RestsModule } from './rests/rests.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PostgresModule,
    LoggerModule,
    RepositoryModule,
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
  providers: [{
    provide:APP_FILTER,
    useClass: GlobalExceptionFilter
  }],
})
export class AppModule {}
