import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiForbiddenResponse, ApiTags } from "@nestjs/swagger";
import { PharmGroupResDto } from "./dto/res/pharm-group.res.dto";
import { PharmGroupsService } from './pharm-groups.service';
import { CreatePharmGroupDto } from './dto/req/create-pharm-group.dto';
import { UpdatePharmGroupDto } from './dto/req/update-pharm-group.dto';
@ApiTags('pharm-groups')
@Controller('pharm-groups')
export class PharmGroupsController {
  constructor(private readonly pharmGroupsService: PharmGroupsService) {}

  //@Post()
  public async create(@Body() createPharmGroupDto: CreatePharmGroupDto) :Promise<PharmGroupResDto> {
    return await this.pharmGroupsService.create(createPharmGroupDto);
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @Get()
  public async findAll():Promise<PharmGroupResDto[]>  {
    return await this.pharmGroupsService.findAll();
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiBadRequestResponse({ description: 'Bad Request' })

  @Get(':id')
 public async findOne(@Param('id') id: string):Promise<PharmGroupResDto>  {
    return await this.pharmGroupsService.findOne(+id);
  }

  //@Patch(':id')
  public async update(@Param('id') id: string, @Body() updatePharmGroupDto: UpdatePharmGroupDto):Promise<PharmGroupResDto>  {
    return await this.pharmGroupsService.update(+id, updatePharmGroupDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pharmGroupsService.remove(+id);
  // }
}
