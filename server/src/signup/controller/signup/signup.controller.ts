import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { authHelper } from 'src/helpers/auth.helper';
import { UsersService } from 'src/services/users/users.service';
import { NewUserDto } from 'src/signup/dtos/newUser.dto';

@Controller('signup')
export class SignupController {
  constructor(
    private UsersService: UsersService,
    private authHelper: authHelper,
  ) {}
  @UsePipes(new ValidationPipe())
  @Post()
  async signupUser(@Body() data: NewUserDto, @Res() res: Response) {
    const password = await this.authHelper.encrypt('this');
    data.password = password;
    data.dateJoined = new Date();
    const user = await this.UsersService.findUserByEmail(data.email);
    if (user[0])
      return res.json({ status: 400, message: 'User already registered' });
    await this.UsersService.createUser(data);
    res.json({ status: 200, message: 'User added successfully' });
  }
}
