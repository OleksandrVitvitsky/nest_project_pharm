import { ApiProperty } from '@nestjs/swagger';

export class UpdatePharmacyDto {
  @ApiProperty({
    format: 'uuid',
  })
  public readonly ext_Id: string;

  @ApiProperty({
    example: 'Аптека №103',
  })
  name?: string;

  serialNumber?: number;

  adress?: string;

  phone?: string;
}
