import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { fastify } from 'fastify';
import { awsLambdaFastify } from '@fastify/aws-lambda';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';

let cachedNestApp;

async function bootstrapServer() {
  const serverOptions = { logger: true };
  const instance = fastify(serverOptions);
  const app = await NestFactory.create(AppModule, new FastifyAdapter(instance), {
    logger: !process.env.AWS_EXECUTION_ENV ? new Logger() : console
  });

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

  await app.init();

  const proxy = awsLambdaFastify(instance);

  return { app, proxy };
}

export const handler = async (event, context) => {
  if(!cachedNestApp) 
    cachedNestApp = await bootstrapServer();

  return cachedNestApp.proxy(event, context);
};
