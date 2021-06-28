import { PartialType } from '@nestjs/mapped-types';
import { CreateWatterWellDto } from './create-watter-well.dto';

export class UpdateWatterWellDto extends PartialType(CreateWatterWellDto) {}
