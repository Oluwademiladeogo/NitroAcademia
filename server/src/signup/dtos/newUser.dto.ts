import { IsAlpha, IsEmail, IsPhoneNumber } from 'class-validator';

export class NewUserDto {
  @IsAlpha()
  firstname: string;
  lastname: string;
  feedback: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber('NG')
  number: string;
}
