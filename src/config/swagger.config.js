// eslint-disable-next-line import/no-extraneous-dependencies
import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Fiz-Burger - API Documentation')
  .setDescription('Janis - Challenge - API Solution.')
  .setVersion('1.0')
  .addTag('API Endpoints')
  .build();
