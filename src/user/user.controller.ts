import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Post('post')
  async postUser(@Body() body) {
    return this.userService.postUesr(body);
  }
}
