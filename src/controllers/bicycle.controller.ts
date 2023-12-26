import { Controller, Get, Post, Body } from '@nestjs/common';
import { BicycleService } from '../services/bicycle.service';
import { Bicycle } from '../models/bicycle.model';

@Controller('bicycles')
export class BicycleController {
  constructor(private readonly bicycleService: BicycleService) {}

  @Get('findall')
  async findAll(): Promise<Bicycle[]> {
    return this.bicycleService.findAll();
  }

  @Post('create')
  async create(@Body() bicycle: Bicycle): Promise<Bicycle> {
    return this.bicycleService.create(bicycle);
  }
}
