import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotIn,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';

import { StringTransformHelper } from '../../../../common/helpers/string.transform.helper';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'User name',
    required: true,
  })
  @Transform(StringTransformHelper.trim)
  @IsString()
  @Length(2, 100)
  public readonly name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'User email',
    required: true,
  })
  @IsString()
  @IsEmail()
  @Transform(StringTransformHelper.trim)
  public readonly email: string;

  @ApiProperty({
    example: 'password123',
    description: 'User password',
    required: true,
  })
  @Transform(StringTransformHelper.trim)
  @IsNotIn(['password', 'qwe', '123'])
  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Incorrect password',
  })
  public readonly password: string;

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
  @IsOptional()
  public readonly phone: string;
}
//  приклад валідування вкладеності

// @IsOptional()
// @ValidateNested({ each: true })
// @IsArray()
// @Type(() => CreateCarDto)
// cars: CreateCarDto[];
