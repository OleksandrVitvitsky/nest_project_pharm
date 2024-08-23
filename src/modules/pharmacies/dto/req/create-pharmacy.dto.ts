import { ApiProperty } from '@nestjs/swagger';
import { CreateCompanyDto } from "../../../companies/dto/req/create-company.dto";


export class CreatePharmacyDto {
  @ApiProperty({
    format: 'uuid',
  })
  public readonly ext_Id: string;


  public readonly name: string;

  public readonly serialNumber: number;

  public readonly adress?: string;

  public readonly phone?: string;
  public readonly company: CreateCompanyDto;
}
