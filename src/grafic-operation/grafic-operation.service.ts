import { Injectable } from '@nestjs/common';
import { CreateGraficOperationDto } from './dto/create-grafic-operation.dto';
import { UpdateGraficOperationDto } from './dto/update-grafic-operation.dto';

@Injectable()
export class GraficOperationService {
  create(createGraficOperationDto: CreateGraficOperationDto) {
    return 'This action adds a new graficOperation';
  }

  findAll() {
    return `This action returns all graficOperation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graficOperation`;
  }

  update(id: number, updateGraficOperationDto: UpdateGraficOperationDto) {
    return `This action updates a #${id} graficOperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} graficOperation`;
  }
}
