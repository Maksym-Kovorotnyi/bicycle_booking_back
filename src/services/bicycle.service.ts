import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bicycle } from '../models/bicycle.model';

@Injectable()
export class BicycleService {
  constructor(
    @InjectModel(Bicycle.name) private readonly bicycleModel: Model<Bicycle>,
  ) {}

  async findAll(): Promise<Bicycle[]> {
    return this.bicycleModel.find().exec();
  }

  async create(bicycle: Bicycle): Promise<Bicycle> {
    const createdBicycle = new this.bicycleModel(bicycle);
    return createdBicycle.save();
  }
}
