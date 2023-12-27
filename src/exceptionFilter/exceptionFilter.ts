import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message;

    if (exception.name === 'ValidationError') {
      console.log('this');

      return response.status(400).json({
        statusCode: 400,
        message,
      });
    }
    const status = exception.getStatus();
    console.log('this222');

    return response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
