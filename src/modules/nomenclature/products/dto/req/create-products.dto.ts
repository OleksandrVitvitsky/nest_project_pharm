import { ApiProperty } from '@nestjs/swagger';
import { CreatePharmGroupDto } from "../../../pharm-groups/dto/req/create-pharm-group.dto";

import { CreateProducerDto } from '../../../producers/dto/req/create-producer.dto';
import { CreateSubstanceDto } from "../../../substances/dto/req/create-substance.dto";

export class CreateProductDto {
  @ApiProperty({ format: 'uuid',
  })
  private readonly ext_Id: string;

  private readonly name: string;
  private readonly producer: CreateProducerDto;
  private readonly barcode?: string[];
  private readonly morion_codes?: string[];
  private readonly instruction?: string;
  private readonly ATX_Code?: string;
  private readonly international_name?: string;
  private readonly active_substance?: CreateSubstanceDto[];
  private readonly pharm_group?: CreatePharmGroupDto;


}
export class CreateListProductsDto {
  @ApiProperty({ type: [CreateProductDto] })
  private readonly Products: CreateProductDto[]
}
