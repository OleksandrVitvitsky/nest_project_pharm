import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiForbiddenResponse, ApiNoContentResponse,
  ApiTags, ApiUnauthorizedResponse
} from "@nestjs/swagger";

import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
import { PublicUserResDto } from './dto/res/public-user.res.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Post()
  public async create(@Body() dto: CreateUserDto): Promise<PublicUserResDto> {
    return await this.usersService.create(dto);
  }
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @Get('me')
  public async findMe(): Promise<PublicUserResDto> {
    return await this.usersService.findMe(1);
  }
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Patch('me')
  public async updateMe(@Body() dto: UpdateUserDto): Promise<PublicUserResDto> {
    return await this.usersService.updateMe(1, dto);
  }
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiNoContentResponse({ description: 'User has been removed' })
  @Delete('me')
  public async removeMe(): Promise<void> {
    return await this.usersService.removeMe(1);
  }
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get(':id')
  public async findById(@Param('id') id: string): Promise<PublicUserResDto> {
    return await this.usersService.findById(+id);
  }
}
