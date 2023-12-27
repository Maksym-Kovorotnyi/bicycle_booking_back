import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BicycleService } from '../services/bicycle.service';
import { Bicycle } from '../models/bicycle.model';

@Controller('bicycles')
export class BicycleController {
  constructor(private readonly bicycleService: BicycleService) {}

  @Get()
  async findAll(): Promise<Bicycle[]> {
    return this.bicycleService.findAll();
  }

  @Post()
  async create(@Body() bicycle: Bicycle): Promise<Bicycle> {
    return this.bicycleService.create(bicycle);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body('status') status: Pick<Bicycle, 'status'>,
  ): Promise<Bicycle> {
    return this.bicycleService.update(id, status);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.bicycleService.delete(id);
  }
}
