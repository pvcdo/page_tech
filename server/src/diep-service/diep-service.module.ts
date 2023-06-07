import { Module } from '@nestjs/common';
import { DiepServiceService } from './diep-service.service';
import { DiepServiceController } from './diep-service.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DiepServiceController],
  providers: [DiepServiceService, PrismaService]
})
export class DiepServiceModule {}
