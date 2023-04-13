import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDefinition } from './schemas/user';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_BASE_URI),
    MongooseModule.forFeature([UserDefinition]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
