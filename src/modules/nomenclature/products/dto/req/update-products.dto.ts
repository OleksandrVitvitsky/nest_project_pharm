import { ApiProperty } from '@nestjs/swagger';

import { PharmGroupResDto } from '../../../pharm-groups/dto/res/pharm-group.res.dto';
import { ProducerResDto } from '../../../producers/dto/res/producer.res.dto';
import { SubstabceResDto } from '../../../substances/dto/res/substabce.res.dto';

export class UpdateProductDto {
  @ApiProperty({ format: 'uuid' })
  private readonly id?: string;

  @ApiProperty({ format: 'uuid' })
  private readonly ext_Id: string;

  private readonly name?: string;
  private readonly producer?: ProducerResDto;
  private readonly barcode?: string[];
  private readonly morion_codes?: string[];
  private readonly instruction?: string;
  private readonly ATX_Code?: string;
  private readonly international_name?: string;
  private readonly active_substance?: SubstabceResDto[];
  private readonly pharm_group?: PharmGroupResDto;
}
export class UpdateListProductsDto {
  @ApiProperty({ type: [UpdateProductDto] })
  private readonly Products: UpdateProductDto[];
}
