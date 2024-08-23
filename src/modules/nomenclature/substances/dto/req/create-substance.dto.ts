import { ApiProperty } from "@nestjs/swagger";

export class CreateSubstanceDto {
  @ApiProperty({
    format:'uuid',
  })
  private readonly ext_Id: string;
  private readonly name: string;

}
