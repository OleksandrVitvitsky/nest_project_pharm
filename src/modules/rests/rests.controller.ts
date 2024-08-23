import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth, ApiConflictResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnauthorizedResponse
} from "@nestjs/swagger";

import { CreateRestsDto } from './dto/req/create-rests.dto';
import { ImportRestsResDto } from './dto/res/import.rests.res.dto';
import { RestsService } from './rests.service';

@ApiTags('Rests')
@Controller('Rests')
export class RestsController {
  constructor(private readonly restsService: RestsService) {}
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @Post()
  public async create(@Body() dto: CreateRestsDto): Promise<ImportRestsResDto> {
    return await this.restsService.create(dto);
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
   @Get()
   public async findAll(): Promise<any> {
   return await this.restsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.restsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() dto: UpdateRestsDto) {
  //   return this.restsService.update(+id, dto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.restsService.remove(+id);
  // }
}
