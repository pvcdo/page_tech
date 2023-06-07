import { PartialType } from '@nestjs/mapped-types';
import { CreateControleCadmDto } from './create-controle-cadm.dto';

export class UpdateControleCadmDto extends PartialType(CreateControleCadmDto) {}
