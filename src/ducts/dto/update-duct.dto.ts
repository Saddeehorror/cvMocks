import { PartialType } from '@nestjs/mapped-types';
import { CreateDuctDto } from './create-duct.dto';

export class UpdateDuctDto extends PartialType(CreateDuctDto) {}
