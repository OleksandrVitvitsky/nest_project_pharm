import { Injectable } from '@nestjs/common';

import { CreatePharmacyDto } from './dto/req/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/req/update-pharmacy.dto';

@Injectable()
export class PharmaciesService {
  public async create(dto: CreatePharmacyDto): Promise<any> {
    return 'This action adds a new pharmacy';
  }

  public async findAll(): Promise<any> {
    return `This action returns all pharmacies`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} pharmacy`;
  }

  public async update(id: number, dto: UpdatePharmacyDto): Promise<any> {
    return `This action updates a #${id} pharmacy`;
  }

  public async remove(id: number): Promise<any> {
    return `This action removes a #${id} pharmacy`;
  }
}
