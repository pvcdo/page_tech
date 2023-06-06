import { Module } from '@nestjs/common';
import { ControleCadmsService } from './controle-cadms.service';
import { ControleCadmsController } from './controle-cadms.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ControleCadmsController],
  providers: [ControleCadmsService, PrismaService]
})
export class ControleCadmsModule {}
