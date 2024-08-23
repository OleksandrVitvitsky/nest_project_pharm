import { ApiProperty } from '@nestjs/swagger';

export class PharmacyResDto {
  @ApiProperty({ format: 'uuid' })
  id?: string;

  @ApiProperty({ format: 'uuid' })
  ext_Id?: string;

  name?: string;
  adress?: string;
  serialNumber?: number;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}
