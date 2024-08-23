import { ApiProperty } from '@nestjs/swagger';

export class ProducerResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ format: 'uuid' })
  ext_Id: string;

  name?: string;
  domestic: boolean;
  createdAt: Date;
  updatedAt: Date;
}
