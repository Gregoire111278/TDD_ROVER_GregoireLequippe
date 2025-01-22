import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoverService } from './rover.service';
import { CreateRoverDto } from './dto/create-rover.dto';
import { UpdateRoverDto } from './dto/update-rover.dto';

@Controller('rover')
export class RoverController {
  constructor(private readonly roverService: RoverService) {}

  @Post()
  create(@Body() createRoverDto: CreateRoverDto) {
    return this.roverService.create(createRoverDto);
  }

  @Get()
  findAll() {
    return this.roverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoverDto: UpdateRoverDto) {
    return this.roverService.update(+id, updateRoverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roverService.remove(+id);
  }

  @Post('commands')
    commands(@Body() commands: { plateau: number[]; rovers: { position: string; commands: string }[] }) {
        return this.roverService.commandsLogic(commands.plateau, commands.rovers);
    }
}
