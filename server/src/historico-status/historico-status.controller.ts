import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoricoStatusService } from './historico-status.service';
import { CreateHistoricoStatusDto } from './dto/create-historico-status.dto';
import { UpdateHistoricoStatusDto } from './dto/update-historico-status.dto';

@Controller('historico-status')
export class HistoricoStatusController {
  constructor(private readonly historicoStatusService: HistoricoStatusService) {}

  @Post()
  create(@Body() createHistoricoStatusDto: CreateHistoricoStatusDto) {
    return this.historicoStatusService.create(createHistoricoStatusDto);
  }

  @Get()
  findAll() {
    return this.historicoStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicoStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoricoStatusDto: UpdateHistoricoStatusDto) {
    return this.historicoStatusService.update(+id, updateHistoricoStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicoStatusService.remove(+id);
  }
}
