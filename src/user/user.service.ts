import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    if (!user.name) {
      return new UnauthorizedException('name 이 없습니다.');
    }
    const hash = await bcrypt.hash(user.password, 10);
    return {
      ...user,
      password: hash,
    };
  }
}
