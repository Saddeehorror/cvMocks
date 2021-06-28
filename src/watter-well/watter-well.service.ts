import { Injectable } from '@nestjs/common';
import { CreateWatterWellDto } from './dto/create-watter-well.dto';
import { UpdateWatterWellDto } from './dto/update-watter-well.dto';

@Injectable()
export class WatterWellService {
  create(createWatterWellDto: CreateWatterWellDto) {
    return 'This action adds a new watterWell';
  }

  findAll() {
    return `This action returns all watterWell`;
  }

  findOne(id: number) {
    return `This action returns a #${id} watterWell`;
  }

  update(id: number, updateWatterWellDto: UpdateWatterWellDto) {
    return `This action updates a #${id} watterWell`;
  }

  remove(id: number) {
    return `This action removes a #${id} watterWell`;
  }
}
