import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from "@nestjs/swagger";
import { CreatePharmGroupDto } from './create-pharm-group.dto';

export class UpdatePharmGroupDto  {
  @ApiProperty({format:'uuid'})
  id?:string
  @ApiProperty({format:'uuid'})
  ext_Id: string;
  name: string;
}
