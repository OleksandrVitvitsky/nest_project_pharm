import {
  Body,
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiForbiddenResponse, ApiTags } from "@nestjs/swagger";

import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/req/create-company.dto';
import { CompanyResDto } from './dto/res/company.res.dto';

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  //@Post()
  public async create(@Body() dto: CreateCompanyDto): Promise<CompanyResDto> {
    return await this.companiesService.create(dto);
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @Get()
  public async findAll(): Promise<CompanyResDto[]> {
    return await this.companiesService.findAll();
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiBadRequestResponse({ description: 'Bad Request' })

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<CompanyResDto> {
    return await this.companiesService.findOne(+id);
  }

  //@Patch(':id')
  // update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) Promise<CompanyResDto> {
  //   return this.companiesService.update(+id, updateCompanyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.companiesService.remove(+id);
  // }
}
