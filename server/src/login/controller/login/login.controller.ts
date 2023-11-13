import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { authHelper } from 'src/helpers/auth.helper';
import { loginUserDto } from 'src/login/dtos/loginUser.dto';
import { UsersService } from 'src/services/users/users.service';

@Controller('login')
export class LoginController {
  constructor(
    private UsersService: UsersService,
    private authHelper: authHelper,
  ) {}
  @UsePipes(new ValidationPipe())
  @Post()
  async loginUser(@Body() data: loginUserDto, @Res() res: Response) {
    const user: any = await this.UsersService.findUserByEmail(data.email);
    const pw = await this.authHelper.compare(data.password, user.password);
    if (!pw || !user[0])
      return res.json({ status: 400, message: 'invalid email or password' });
    res.json({ status: 200, message: 'User successfully logged in' });
  }
}
