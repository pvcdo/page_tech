import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { SetUserDto } from 'src/dto/set-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  async getUsers(): Promise<string> {
    return 'Este são todos os usuários';
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<string>{
    return `Este é o usuário ${id}`
  }

  @Post()
  async setUser(@Body() setUserDto: SetUserDto): Promise<string> {
    if(setUserDto.email === undefined){
      return 'não veio email'
    }
    if(setUserDto.name === undefined){
      return 'não veio nome'
    }

    return 'Usuário cadastrado com sucesso!'
  }

}
