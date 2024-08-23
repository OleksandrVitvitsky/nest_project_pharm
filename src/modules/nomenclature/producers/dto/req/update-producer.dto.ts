import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProducerDto {
  @ApiProperty({ format: 'uuid' })
  id?: string;
  @ApiProperty({ format: 'uuid' })
  ext_Id: string;
  name: string;
  domestic?: boolean;
}
