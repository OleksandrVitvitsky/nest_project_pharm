import { ApiProperty } from '@nestjs/swagger';

export class CompanyResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;
  EGRPOU?: string;
  NAME?: string;
  INN?: number;
  Adress?: string;
  createdAt: Date;
  updatedAt: Date;
}
