
import { ApiProperty } from '@nestjs/swagger';

import { Rest_Good } from '../req/create-rests.dto';

export class RestResGoodsDto extends Rest_Good {
  @ApiProperty({
    format: 'uuid',
  })
  id: string;
  created_at: Date;
  updated_at: Date;
}
export class ImportRestsResDto {
  @ApiProperty({ type: RestResGoodsDto, isArray: true })
  Rest_Goods: RestResGoodsDto[];
}
