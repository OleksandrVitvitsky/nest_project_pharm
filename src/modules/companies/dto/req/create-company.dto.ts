import { Transform } from "class-transformer";
import { IsOptional, IsString, Length } from "class-validator";
import { StringTransformHelper } from "../../../../common/helpers/string.transform.helper";

export class CreateCompanyDto {
  @Transform(StringTransformHelper.trim)
  @IsString()
  @Length(10,10)
  public readonly EGRPOU: string;

  @Transform(StringTransformHelper.trim)
  @IsString()
  public readonly NAME: string;

  @Transform(StringTransformHelper.trim)
  @IsString()
  @Length(12,12)
  @IsOptional()
  public readonly INN?: string;

  @Transform(StringTransformHelper.trim)
  @IsString()
  @Length(10)
  @IsOptional()
  public readonly Adress?: string;
}
