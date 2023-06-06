import { Injectable } from '@nestjs/common';
import { CreateHistoricoStatusDto } from './dto/create-historico-status.dto';
import { UpdateHistoricoStatusDto } from './dto/update-historico-status.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HistoricoStatusService {
  constructor(private prisma: PrismaService) {}
  create(createHistoricoStatusDto: CreateHistoricoStatusDto) {
    return 'This action adds a new historicoStatus';
  }

  findAll() {
    return `This action returns all historicoStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historicoStatus`;
  }

  update(id: number, updateHistoricoStatusDto: UpdateHistoricoStatusDto) {
    return `This action updates a #${id} historicoStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} historicoStatus`;
  }
}
