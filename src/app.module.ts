import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { Bicycle, BicycleSchema } from './models/bicycle.model';
import { BicycleController } from './controllers/bicycle.controller';
import { BicycleService } from './services/bicycle.service';
import { HttpExceptionFilter } from './exceptionFilter/exceptionFilter';
import { APP_FILTER } from '@nestjs/core';

const { PASSWORD, DATABASENAME } = process.env;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://Maksym:${PASSWORD}@cluster0.ayyhgmc.mongodb.net/${DATABASENAME}`,
    ),
    MongooseModule.forFeature([{ name: Bicycle.name, schema: BicycleSchema }]),
  ],
  controllers: [AppController, BicycleController],
  providers: [
    AppService,
    BicycleService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
