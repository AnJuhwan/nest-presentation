import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { userDto } from './dto/user.dto';
@Injectable()
export class UserService {
  getUser() {
    return {
      name: 'AnJuhwan',
      age: 26,
    };
  }

  async postUesr(user: userDto) {
    const hash = await bcrypt.hash(user.password, 10);
    return {
      ...user,
      password: hash,
    };
  }
}
