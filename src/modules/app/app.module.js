import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PingController } from '../ping/ping.controller';
import { MongodbModule } from '../../database/mongodb/mongodb.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongodbModule,
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
