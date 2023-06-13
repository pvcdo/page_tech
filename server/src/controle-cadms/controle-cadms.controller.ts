import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControleCadmsService } from './controle-cadms.service';
import { CreateControleCadmDto } from './dto/create-controle-cadm.dto';
import { UpdateControleCadmDto } from './dto/update-controle-cadm.dto';

@Controller('controle-cadms')
export class ControleCadmsController {
  constructor(private readonly controleCadmsService: ControleCadmsService) {}

  @Post()
  create(@Body() createControleCadmDto: CreateControleCadmDto) {
    const {sigesp} = createControleCadmDto
    if(!sigesp){
      return "É necessário o fornecimento do SIGESP"
    }
    return this.controleCadmsService.create(createControleCadmDto)
  }

  @Get()
  findAll() {
    return this.controleCadmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controleCadmsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControleCadmDto: UpdateControleCadmDto) {
    return this.controleCadmsService.update(+id, updateControleCadmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controleCadmsService.remove(+id);
  }
}
