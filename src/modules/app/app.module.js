import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PingController } from '../ping/ping.controller';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    ProductModule
  ],
  controllers: [PingController],
  providers: []
})
export class AppModule {
  static port;

  constructor() {
    const configService = new ConfigService();

    MongooseModule.forRoot(
      configService.get('MONGODB_URI') || 'mongodb://localhost:27017/tracker',
      {
        autoIndex: true
      }
    );

    AppModule.port = +configService.get('PORT') || 3000;
  }
}
