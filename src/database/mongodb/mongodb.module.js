import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.NODE_ENV === 'test'
        ? process.env.MONGO_TEST_CONNECTION_URI
        : process.env.MONGO_CONNECTION_URI,
      {
        dbName: process.env.MONGODB_NAME,
        autoIndex: true
      }
    )
  ],
  providers: [],
  exports: []
})
export class MongodbModule {}
