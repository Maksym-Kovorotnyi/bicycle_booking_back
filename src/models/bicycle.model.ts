import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Bicycle extends Document {
  @Prop({ required: true, minlength: 5, maxlength: 20 })
  _id: number;

  @Prop({ required: true, minlength: 5 })
  name: string;

  @Prop({ required: true, minlength: 5 })
  type: string;

  @Prop({ required: true, minlength: 5 })
  color: string;

  @Prop({ required: true, minlength: 5 })
  wheelSize: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, minlength: 5 })
  description: string;

  @Prop({ enum: ['Available', 'Busy', 'Unavailable'] })
  status: 'Available' | 'Busy' | 'Unavailable';
}

export const BicycleSchema = SchemaFactory.createForClass(Bicycle);
