import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { NewUserDto } from 'src/signup/dtos/newUser.dto';

@Controller('signup')
export class SignupController {
    @UsePipes(new ValidationPipe())
    @Post()
    signupUser(@Body() user:NewUserDto, res:Response){
        
    }

}
