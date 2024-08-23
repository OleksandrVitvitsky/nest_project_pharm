import { ApiProperty } from '@nestjs/swagger';

import { CreatePharmacyDto } from '../../../pharmacies/dto/req/create-pharmacy.dto';

export class Rest_Good {
  @ApiProperty({ format: 'uuid' })
  ext_Id: string;
  name: string;
  quantity: number;
  price: number;
}
export class CreateRestsDto {
  @ApiProperty({ type: CreatePharmacyDto })
  branch: CreatePharmacyDto;
  Rest_Goods: Rest_Good[];
}
