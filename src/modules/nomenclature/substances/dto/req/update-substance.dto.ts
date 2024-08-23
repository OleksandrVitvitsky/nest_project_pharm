import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from "@nestjs/swagger";
import { CreateSubstanceDto } from './create-substance.dto';

export class UpdateSubstanceDto  {
  @ApiProperty({format:'uuid'})
  id?:string
  @ApiProperty({format:'uuid'})
  ext_Id: string;
  name: string;
}
