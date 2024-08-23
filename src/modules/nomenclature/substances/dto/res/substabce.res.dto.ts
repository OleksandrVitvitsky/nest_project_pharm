import { ApiProperty } from '@nestjs/swagger';

export class SubstabceResDto {
  @ApiProperty({
    format: 'uuid',
  })
  id: string;
  @ApiProperty({
    format: 'uuid',
  })
  ext_Id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
