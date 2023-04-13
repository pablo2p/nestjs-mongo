import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDefinition } from './schemas/user';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(UserDefinition['name'])
    private readonly user: Model<any>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  example() {
    return this.user.find({}, { usuario: 1, name: 1 }).limit(5).lean();
  }
}
