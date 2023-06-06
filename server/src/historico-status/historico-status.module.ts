import { Module } from '@nestjs/common';
import { HistoricoStatusService } from './historico-status.service';
import { HistoricoStatusController } from './historico-status.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [HistoricoStatusController],
  providers: [HistoricoStatusService, PrismaService]
})
export class HistoricoStatusModule {}
