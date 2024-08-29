import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { LoggerService } from '../logger/logger.service';
import { UserRepository } from '../repository/services/user.repository';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
import { UserResDto } from './dto/res/user.res.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly logger: LoggerService,
    private readonly userRepository: UserRepository,
  ) {}


  public async findById(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }
  public async findMe(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async updateMe(id: number, dto: UpdateUserDto): Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async removeMe(id: number): Promise<any> {
    return `This action removes a #${id} user`;
  }
}
