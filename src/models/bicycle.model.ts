import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Bicycle extends Document {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  color: string;

  @Prop()
  wheelSize: string;

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop()
  status?: string;
}

export const BicycleSchema = SchemaFactory.createForClass(Bicycle);
