import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';

import { StringTransformHelper } from '../../../../common/helpers/string.transform.helper';

export class BaseUserReqDto {
  @IsOptional()
  @IsString()
  @Length(3, 50)
  @Transform(StringTransformHelper.trim)
  @Type(() => String)
  name?: string;

  @ApiProperty({ example: 'test@gmail.com' })
  @IsString()
  @Length(0, 300)
  @Matches(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
  email: string;

  @ApiProperty({ example: '123qwe!@#QWE' })
  @IsString()
  @Length(0, 300)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*#?&])[A-Za-z\d@$_!%*#?&]{8,}$/)
  password: string;

  @Type(() => Number)
  @IsInt()
  @IsNumber()
  @Max(99)
  @Min(12)
  @IsOptional()
  public readonly age?: number;

  @Transform(StringTransformHelper.trim)
  @IsString()
  //@ValidateIf((obj) => obj.age === 35)
  public readonly phone: string;

  @IsOptional()
  @IsString()
  @Length(0, 3000)
  image?: string;
}
