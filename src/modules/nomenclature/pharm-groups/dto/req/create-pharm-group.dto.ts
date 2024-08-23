import { ApiProperty } from '@nestjs/swagger';
import { Transform } from "class-transformer";
import { IsString, Length } from "class-validator";
import { StringTransformHelper } from "../../../../../common/helpers/string.transform.helper";

export class CreatePharmGroupDto {
  @ApiProperty({ format: 'uuid' })
  @Transform(StringTransformHelper.trim)
  @Transform(StringTransformHelper.toLowerCase)
  @IsString()
  @Length(36, 36)
  private readonly ext_Id: string;

  @Transform(StringTransformHelper.trim)
  @IsString()
  @Length(2, 100)
  private readonly name: string;
}
