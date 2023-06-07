import { Injectable } from '@nestjs/common';
import { CreateControleCadmDto } from './dto/create-controle-cadm.dto';
import { UpdateControleCadmDto } from './dto/update-controle-cadm.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma, controle_cadms } from '@prisma/client';

@Injectable()
export class ControleCadmsService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.controle_cadmsCreateInput): Promise<string> {
    return this.prisma.controle_cadms.create({
      data,
    }).then(() => {
      return "sigesp cadastrado com sucesso!"
    });
  }

  findAll() {
    return this.prisma.controle_cadms.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} controleCadm`;
  }

  update(id: number, updateControleCadmDto: UpdateControleCadmDto) {
    return `This action updates a #${id} controleCadm`;
  }

  remove(id: number) {
    return `This action removes a #${id} controleCadm`;
  }
}
