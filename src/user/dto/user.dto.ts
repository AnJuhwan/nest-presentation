import { ApiProperty } from '@nestjs/swagger';

export class userDto {
  @ApiProperty({
    example: 'anjuhwan',
    description: '이름',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'juhwan@thetrive.com',
    description: '이메일',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'aaaaaaaa',
    description: '비밀번호',
    required: true,
  })
  password: string;
}
