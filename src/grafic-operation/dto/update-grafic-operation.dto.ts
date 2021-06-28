import { PartialType } from '@nestjs/mapped-types';
import { CreateGraficOperationDto } from './create-grafic-operation.dto';

export class UpdateGraficOperationDto extends PartialType(CreateGraficOperationDto) {}
