//import { PartialType } from '@nestjs/mapped-types';
import { PickType } from '@nestjs/swagger';

import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PickType(CreateUserDto, [
//   'name',
//   'password',
//   'age',
//   'phone',
// ]) {}

export class UpdateUserDto {
  name?: string;
  password?: string;
  age?: number;
  phone?: string;
}
