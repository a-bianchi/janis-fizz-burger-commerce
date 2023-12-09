import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PingController } from '../ping/ping.controller';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_NAME,
      autoIndex: true
    }),
    ProductModule
  ],
  controllers: [PingController],
  providers: []
})
export class AppModule {
  static port;

  constructor() {
    const configService = new ConfigService();
    AppModule.port = +configService.get('PORT') || 3000;
  }
}
