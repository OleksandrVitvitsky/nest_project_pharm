import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends CreateCompanyDto {
  public readonly id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}
