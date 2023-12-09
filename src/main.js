import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
// import { SwaggerModule } from '@nestjs/swagger';
// import { swaggerConfig } from './modules/config';

import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter({ logger: true }),
    { cors: true }
  );

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  });

  // const document = SwaggerModule.createDocument(app, swaggerConfig);
  // SwaggerModule.setup('documentation', app, document);
  await app.listen(AppModule.port, '0.0.0.0');

  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
