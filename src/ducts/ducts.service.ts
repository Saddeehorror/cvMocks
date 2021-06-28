import { Injectable } from '@nestjs/common';
import { CreateDuctDto } from './dto/create-duct.dto';
import { UpdateDuctDto } from './dto/update-duct.dto';

@Injectable()
export class DuctsService {
  create(createDuctDto: CreateDuctDto) {
    return 'This action adds a new duct';
  }

  findAll() {
    return `This action returns all ducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} duct`;
  }

  update(id: number, updateDuctDto: UpdateDuctDto) {
    return `This action updates a #${id} duct`;
  }

  remove(id: number) {
    return `This action removes a #${id} duct`;
  }
}
