import { Injectable } from '@nestjs/common';
import { CreatePharmGroupDto } from './dto/req/create-pharm-group.dto';
import { UpdatePharmGroupDto } from './dto/req/update-pharm-group.dto';
import { PharmGroupResDto } from "./dto/res/pharm-group.res.dto";

@Injectable()
export class PharmGroupsService {
  public async create(createPharmGroupDto: CreatePharmGroupDto):Promise<any> {
    return 'This action adds a new pharmGroup';
  }

  public async findAll():Promise<any> {
    return  `This action returns all pharmGroups`;
  }

  public async findOne(id: number):Promise<any> {
    return `This action returns a #${id} pharmGroup`;
  }

  public async update(id: number, updatePharmGroupDto: UpdatePharmGroupDto):Promise<any> {
    return `This action updates a #${id} pharmGroup`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} pharmGroup`;
  // }
}
