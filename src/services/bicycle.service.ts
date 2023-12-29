import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bicycle } from '../models/bicycle.model';

@Injectable()
export class BicycleService {
  constructor(
    @InjectModel(Bicycle.name) private readonly bicycleModel: Model<Bicycle>,
  ) {}

  async findAll(): Promise<Bicycle[]> {
    return this.bicycleModel.find();
  }

  async create(bicycle: Bicycle): Promise<Bicycle> {
    const uniqCheck = await this.bicycleModel.findById(bicycle.id);
    if (uniqCheck) {
      throw new ConflictException('A bicycle with such an ID already exists');
    }
    const createdBicycle = new this.bicycleModel({
      ...bicycle,
      _id: bicycle.id,
      status: bicycle.status || 'Available',
    });
    return createdBicycle.save();
  }
  async update(id: string, status: Pick<Bicycle, 'status'>): Promise<Bicycle> {
    const bicycle = await this.bicycleModel.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true },
    );
    return bicycle;
  }
  async delete(id: string): Promise<string> {
    await this.bicycleModel.findByIdAndDelete(id);
    return 'deleted';
  }
}
