import { ApiProperty } from '@nestjs/swagger';

import { PharmGroupResDto } from '../../../pharm-groups/dto/res/pharm-group.res.dto';
import { ProducerResDto } from '../../../producers/dto/res/producer.res.dto';
import { SubstabceResDto } from '../../../substances/dto/res/substabce.res.dto';

export class ProductResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ format: 'uuid' })
  ext_Id: string;

  name: string;
  producer: ProducerResDto;
  barcode?: string[];
  morion_codes?: string[];
  instruction?: string;
  ATX_Code?: string;
  international_name?: string;
  active_substance?: SubstabceResDto[];
  pharm_group?: PharmGroupResDto;
  createdAt: Date;
  updatedAt: Date;
}

export class ProductsListResDto {
  @ApiProperty({ type: [ProductResDto] })
  products: ProductResDto[];
}
