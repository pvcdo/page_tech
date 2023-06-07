import { Injectable } from '@nestjs/common';
import { CreateDiepServiceDto } from './dto/create-diep-service.dto';
import { UpdateDiepServiceDto } from './dto/update-diep-service.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DiepServiceService {
  constructor(private prisma: PrismaService) {}
  create(createDiepServiceDto: CreateDiepServiceDto) {
    return 'This action adds a new diepService';
  }

  findAll() {
    return `This action returns all diepService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diepService`;
  }

  update(id: number, updateDiepServiceDto: UpdateDiepServiceDto) {
    return `This action updates a #${id} diepService`;
  }

  remove(id: number) {
    return `This action removes a #${id} diepService`;
  }
}
