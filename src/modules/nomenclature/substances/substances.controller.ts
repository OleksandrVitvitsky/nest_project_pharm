import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiForbiddenResponse, ApiTags } from "@nestjs/swagger";
import { SubstabceResDto } from "./dto/res/substabce.res.dto";
import { SubstancesService } from './substances.service';
import { CreateSubstanceDto } from './dto/req/create-substance.dto';
import { UpdateSubstanceDto } from './dto/req/update-substance.dto';
@ApiTags('Substances')
@Controller('substances')
export class SubstancesController {
  constructor(private readonly substancesService: SubstancesService) {}

  //@Post()
  //
  public async create(@Body() createSubstanceDto: CreateSubstanceDto): Promise<SubstabceResDto> {
    return await this.substancesService.create(createSubstanceDto);
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @Get()
  public async findAll(): Promise<SubstabceResDto[]> {
    return await this.substancesService.findAll();
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiBadRequestResponse({ description: 'Bad Request' })

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<SubstabceResDto> {
    return await this.substancesService.findOne(+id);
  }

  //@Patch(':id')
  public async update(@Param('id') id: string, @Body() updateSubstanceDto: UpdateSubstanceDto): Promise<SubstabceResDto> {
    return await this.substancesService.update(+id, updateSubstanceDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.substancesService.remove(+id);
  // }
}
