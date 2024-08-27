import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigType, PostgresConfig } from '../config/config.type';
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
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService<ConfigType>) => {
        const config = configService.get<PostgresConfig>('postgres');
        return {
          type: 'postgres',
          host: config.host,
          port: config.port,
          username: config.user,
          password: config.password,
          database: config.dbName,
          entities: [],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
