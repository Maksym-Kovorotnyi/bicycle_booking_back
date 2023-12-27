import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Bicycle extends Document {
  @Prop({ required: true, minlength: 5, maxlength: 50 })
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

  @Prop({ enum: ['available', 'busy', 'unavailable'] })
  status: 'available' | 'busy' | 'unavailable';
}

export const BicycleSchema = SchemaFactory.createForClass(Bicycle);
