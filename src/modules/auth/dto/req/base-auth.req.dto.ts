import { PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { BaseUserReqDto } from '../../../users/dto/req/base-user.req.dto';

export class BaseAuthReqDto extends PickType(BaseUserReqDto, [
  'name',
  'email',
  'password',
  'age',
  'phone',
  'image',
]) {
  @IsNotEmpty()
  @IsString()
  readonly deviceId: string;
}
