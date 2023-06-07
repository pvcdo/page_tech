import { PartialType } from '@nestjs/mapped-types';
import { CreateDiepServiceDto } from './create-diep-service.dto';

export class UpdateDiepServiceDto extends PartialType(CreateDiepServiceDto) {}
