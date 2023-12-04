import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
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
  @UseGuards(LocalAuthGuard)
  @Post()
  async loginUser(
    @Body() data: loginUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    res.status(200).json({ message: 'User successfully logged in' });
  }
}