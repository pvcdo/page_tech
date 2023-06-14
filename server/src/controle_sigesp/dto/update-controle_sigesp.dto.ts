import { PartialType } from '@nestjs/mapped-types';
import { CreateControleSigespDto } from './create-controle_sigesp.dto';

export class UpdateControleSigespDto extends PartialType(CreateControleSigespDto) {}
