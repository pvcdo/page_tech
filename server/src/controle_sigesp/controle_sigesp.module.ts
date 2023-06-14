import { Module } from '@nestjs/common';
import { ControleSigespService } from './controle_sigesp.service';
import { ControleSigespController } from './controle_sigesp.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ControleSigespController],
  providers: [ControleSigespService,PrismaService]
})
export class ControleSigespModule {}
