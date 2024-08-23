import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';

import { StringTransformHelper } from '../../../../../common/helpers/string.transform.helper';

export class CreateProducerDto {
  @ApiProperty({
    format: 'uuid',
  })
  @Transform(StringTransformHelper.trim)
  @Transform(StringTransformHelper.toLowerCase)
  @IsString()
  @Length(36, 36)
  private readonly ext_Id: string;

  @Transform(StringTransformHelper.trim)
  @IsString()
  @Length(3, 50)
  private readonly name: string;

  @ApiProperty({
    default: false,
  })
  @Transform(({ value }) => value ?? false)
  private readonly domestic: boolean;
}
