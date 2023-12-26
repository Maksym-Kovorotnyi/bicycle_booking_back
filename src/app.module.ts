import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { Bicycle, BicycleSchema } from './models/bicycle.model';
import { BicycleController } from './controllers/bicycle.controller';
import { BicycleService } from './services/bicycle.service';

const { PASSWORD, DATABASENAME } = process.env;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://Maksym:${PASSWORD}@cluster0.ayyhgmc.mongodb.net/${DATABASENAME}`,
    ),
    MongooseModule.forFeature([{ name: Bicycle.name, schema: BicycleSchema }]),
  ],
  controllers: [AppController, BicycleController],
  providers: [AppService, BicycleService],
})
export class AppModule {}
