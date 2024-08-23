import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiForbiddenResponse, ApiTags } from "@nestjs/swagger";

import { CreateProducerDto } from './dto/req/create-producer.dto';
import { UpdateProducerDto } from './dto/req/update-producer.dto';
import { ProducerResDto } from "./dto/res/producer.res.dto";
import { ProducersService } from './producers.service';

@ApiTags('Producers')
@Controller('producers')
export class ProducersController {
  constructor(private readonly producersService: ProducersService) {}

  //@Post()
  public async create(
    @Body() createProducerDto: CreateProducerDto,
  ): Promise<ProducerResDto> {
    return await this.producersService.create(createProducerDto);
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @Get()
  public async findAll(): Promise<ProducerResDto[]> {
    return this.producersService.findAll();
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<ProducerResDto> {
    return this.producersService.findOne(+id);
  }

  //@Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateProducerDto: UpdateProducerDto,
  ): Promise<ProducerResDto> {
    return this.producersService.update(+id, updateProducerDto);
  }

  // @Delete(':id')
  // public async remove(@Param('id') id: string) {
  //   return this.producersService.remove(+id);
  // }
}
