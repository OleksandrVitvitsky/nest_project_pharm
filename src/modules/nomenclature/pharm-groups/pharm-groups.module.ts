import { Module } from '@nestjs/common';
import { PharmGroupsService } from './pharm-groups.service';
import { PharmGroupsController } from './pharm-groups.controller';

@Module({
  controllers: [PharmGroupsController],
  providers: [PharmGroupsService],
  exports: [PharmGroupsService],
})
export class PharmGroupsModule {}
