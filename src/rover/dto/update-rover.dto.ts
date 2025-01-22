import { PartialType } from '@nestjs/mapped-types';
import { CreateRoverDto } from './create-rover.dto';

export class UpdateRoverDto extends PartialType(CreateRoverDto) {}
