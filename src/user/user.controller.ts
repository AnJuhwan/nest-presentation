import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { userDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('유저 API')
@Controller('/api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Post('post')
  @ApiOperation({ summary: '유저 생성' }) // api 설명
  @ApiCreatedResponse({
    description: 'Success',
    type: userDto,
  })
  @ApiBody({ type: userDto })
  async postUser(@Body() body) {
    return this.userService.postUesr(body);
  }
}
