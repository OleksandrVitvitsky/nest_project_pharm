import { Injectable } from '@nestjs/common';

import { ProducersService } from '../producers/producers.service';
import { CreateListProductsDto } from './dto/req/create-products.dto';
import { UpdateProductDto } from './dto/req/update-products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly producersService: ProducersService) {}
  public async create(dto: CreateListProductsDto): Promise<any> {
    return 'This action adds a new good' + `${dto.toString()}`;
  }

  public async findAll(): Promise<any> {
    return `This action returns all goods`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} good`;
  }

  public async update(id: number, dto: UpdateProductDto): Promise<any> {
    return `This action updates a #${id} good`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} good`;
  // }
}
