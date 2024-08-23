import { Injectable } from '@nestjs/common';
import { CreateSubstanceDto } from './dto/req/create-substance.dto';
import { UpdateSubstanceDto } from './dto/req/update-substance.dto';

@Injectable()
export class SubstancesService {
  public async create(createSubstanceDto: CreateSubstanceDto) :Promise<any> {
    return 'This action adds a new substance';
  }

  public async findAll():Promise<any> {
    return `This action returns all substances`;
  }

  public async findOne(id: number):Promise<any> {
    return `This action returns a #${id} substance`;
  }

  public async update(id: number, updateSubstanceDto: UpdateSubstanceDto):Promise<any> {
    return `This action updates a #${id} substance`;
  }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} substance`;
  // }
}
