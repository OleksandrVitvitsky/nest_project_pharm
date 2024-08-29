import { IsOptional } from 'class-validator';

import { AgeValid } from '../../decorators/age-valid.decorator';

export class UpdateUserDto {
  @IsOptional()
  name?: string;
  @IsOptional()
  password?: string;
  @AgeValid()
  @IsOptional()
  age?: number;
  @IsOptional()
  phone?: string;
  @IsOptional()
  image?: string;
}
