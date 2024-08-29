import { PickType } from '@nestjs/swagger';

import { BaseAuthReqDto } from './base-auth.req.dto';

export class SignUpReqDto extends PickType(BaseAuthReqDto, [
  'name',
  'email',
  'password',
  'age',
  'phone',
  'image',
  'deviceId',
]) {}
