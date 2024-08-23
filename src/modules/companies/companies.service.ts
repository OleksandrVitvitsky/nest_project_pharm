import { Injectable } from '@nestjs/common';

import { CreateCompanyDto } from './dto/req/create-company.dto';
import { UpdateCompanyDto } from './dto/req/update-company.dto';

@Injectable()
export class CompaniesService {
  public async create(dto: CreateCompanyDto): Promise<any> {
    return 'This action adds a new company';
  }

  public async findAll(): Promise<any> {
    return `This action returns all companies`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} company`;
  }
}
