import { IsEmail, IsStrongPassword } from 'class-validator';

export class loginUserDto {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}
