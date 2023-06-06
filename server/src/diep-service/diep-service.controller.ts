import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiepServiceService } from './diep-service.service';
import { CreateDiepServiceDto } from './dto/create-diep-service.dto';
import { UpdateDiepServiceDto } from './dto/update-diep-service.dto';

@Controller('diep-service')
export class DiepServiceController {
  constructor(private readonly diepServiceService: DiepServiceService) {}

  @Post()
  create(@Body() createDiepServiceDto: CreateDiepServiceDto) {
    return this.diepServiceService.create(createDiepServiceDto);
  }

  @Get()
  findAll() {
    return this.diepServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diepServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiepServiceDto: UpdateDiepServiceDto) {
    return this.diepServiceService.update(+id, updateDiepServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diepServiceService.remove(+id);
  }
}
