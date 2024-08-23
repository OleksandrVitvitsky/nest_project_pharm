import { Injectable } from '@nestjs/common';

import { CreateProducerDto } from './dto/req/create-producer.dto';
import { UpdateProducerDto } from './dto/req/update-producer.dto';
import { ProducerResDto } from "./dto/res/producer.res.dto";

@Injectable()
export class ProducersService {
  public async create(dto: CreateProducerDto): Promise<any> {
    return 'This action adds a new producer';
  }

  public async findAll(): Promise<any> {
    return `This action returns all producers`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} producer`;
  }

  public async update(id: number, dto: UpdateProducerDto): Promise<any> {
    return `This action updates a #${id} producer`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} producer`;
  // }
}
