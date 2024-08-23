import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiForbiddenResponse, ApiTags } from "@nestjs/swagger";

import { CreatePharmacyDto } from './dto/req/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/req/update-pharmacy.dto';
import { PharmacyResDto } from "./dto/res/pharmacy.res.dto";

import { PharmaciesService } from './pharmacies.service';

@ApiTags('Pharmacies')
@Controller('pharmacies')
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  //@Post()
  public async create(
    @Body() dto: CreatePharmacyDto,
  ): Promise<PharmacyResDto> {
    return await this.pharmaciesService.create(dto);
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @Get()
  public async findAll(): Promise<PharmacyResDto[]> {
    return await this.pharmaciesService.findAll();
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiBadRequestResponse({ description: 'Bad Request' })

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<PharmacyResDto> {
    return await this.pharmaciesService.findOne(+id);
  }

  //@Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UpdatePharmacyDto,
  ): Promise<PharmacyResDto> {
    return await this.pharmaciesService.update(+id, dto);
  }

  //@Delete(':id')
  public async remove(@Param('id') id: string): Promise<void> {
    return await this.pharmaciesService.remove(+id);
  }
}
