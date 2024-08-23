import { Injectable } from '@nestjs/common';

import { ProducersService } from '../nomenclature/producers/producers.service';
import { ProductsService } from '../nomenclature/products/products.service';
import { CreateRestsDto } from './dto/req/create-rests.dto';

@Injectable()
export class RestsService {
  constructor(
    private readonly producersService: ProducersService,
    private readonly goodsService: ProductsService,
  ) {}

  public async create(dto: CreateRestsDto): Promise<any> {
    return 'This action adds a new rests of goods';
  }

  public async findAll(): Promise<any> {
    return `This action returns all rests of goods`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} rests of goods`;
  // }

  // update(id: number, dto: UpdateRestsDto) {
  //   return `This action updates a #${id} rests of goods`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} res`;
  // }
}
