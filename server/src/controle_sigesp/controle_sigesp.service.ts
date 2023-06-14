import { Injectable } from '@nestjs/common';
import { CreateControleSigespDto } from './dto/create-controle_sigesp.dto';
import { UpdateControleSigespDto } from './dto/update-controle_sigesp.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ControleSigespService {
  constructor(private prisma: PrismaService) {}  
  async create(data: Prisma.controle_sigespCreateInput): Promise<string> {
    return this.prisma.controle_sigesp.create({
      data,
    })
      .then(() => {
        return "sigesp cadastrado com sucesso!"
      })
      .catch((err) => {
        return err.message
      })
    ;
  }

  findAll() {
    return `This action returns all controleSigesp`;
  }

  async findOne(id: string) {
    return await this.prisma.controle_sigesp.findFirst({
      where:{
        sigesp: id
      }
    })
  }

  update(id: number, updateControleSigespDto: UpdateControleSigespDto) {
    return `This action updates a #${id} controleSigesp`;
  }

  remove(id: number) {
    return `This action removes a #${id} controleSigesp`;
  }
}
