import {
  Body,
  Controller,
  Post,
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
  async signupUser(@Body() user: NewUserDto, res: Response) {
    const password = await this.authHelper.encrypt('this');
    user.password = password;
    user.dateJoined = new Date();
    const found = await this.UsersService.findUserByEmail(user.email);
    if(found) res.json({status: 400, message: "User already registered"})
    await this.UsersService.createUser(user)
    res.json({ status: 200, message: 'User added successfully' });
  }
}
