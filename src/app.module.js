import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PingController } from './ping/ping.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [PingController],
  providers: []
})
export class AppModule {
  static port;

  constructor() {
    const configService = new ConfigService();
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri:
          configService.get('MONGODB_URI') ||
          'mongodb://localhost:27017/burger',
        autoIndex: true
      }),
      inject: [ConfigService]
    });

    AppModule.port = +configService.get('PORT') || 3000;
  }
}
