import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoricoStatusDto } from './create-historico-status.dto';

export class UpdateHistoricoStatusDto extends PartialType(CreateHistoricoStatusDto) {}
