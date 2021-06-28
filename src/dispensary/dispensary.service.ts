import { Injectable } from '@nestjs/common';
import { CreateDispensaryDto } from './dto/create-dispensary.dto';
import { UpdateDispensaryDto } from './dto/update-dispensary.dto';

@Injectable()
export class DispensaryService {
  create(createDispensaryDto: CreateDispensaryDto) {
    return 'This action adds a new dispensary';
  }

  findAll() {
    return `This action returns all dispensary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dispensary`;
  }

  update(id: number, updateDispensaryDto: UpdateDispensaryDto) {
    return `This action updates a #${id} dispensary`;
  }

  remove(id: number) {
    return `This action removes a #${id} dispensary`;
  }
}
