import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';

@Injectable()
export class UsersService {
  public async create(dto: CreateUserDto): Promise<any> {
    return 'This action adds a new user';
  }

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
