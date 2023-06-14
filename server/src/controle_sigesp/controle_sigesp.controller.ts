import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControleSigespService } from './controle_sigesp.service';
import { CreateControleSigespDto } from './dto/create-controle_sigesp.dto';
import { UpdateControleSigespDto } from './dto/update-controle_sigesp.dto';

@Controller('controle-sigesp')
export class ControleSigespController {
  constructor(private readonly controleSigespService: ControleSigespService) {}

  @Post()
  create(@Body() createControleSigespDto: CreateControleSigespDto) {
    const {sigesp} = createControleSigespDto
    if(!sigesp){
      return "É necessário o fornecimento do SIGESP"
    }
    return this.controleSigespService.create(createControleSigespDto)
  }

  @Get()
  findAll() {
    return this.controleSigespService.findAll();
  }

  @Get(':id')
  findOne(@Body('id') id: string) {
    return this.controleSigespService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControleSigespDto: UpdateControleSigespDto) {
    return this.controleSigespService.update(+id, updateControleSigespDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controleSigespService.remove(+id);
  }
}
