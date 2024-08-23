import { Module } from '@nestjs/common';

import { CompaniesModule } from '../companies/companies.module';
import { PharmaciesController } from './pharmacies.controller';
import { PharmaciesService } from './pharmacies.service';

@Module({
  imports: [CompaniesModule],
  controllers: [PharmaciesController],
  providers: [PharmaciesService],
  exports: [PharmaciesService],
})
export class PharmaciesModule {}
