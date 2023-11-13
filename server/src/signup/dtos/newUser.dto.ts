import {
  Matches,
  IsEmail,
  IsPhoneNumber,
  IsStrongPassword,
  IsOptional,
} from 'class-validator';

export class NewUserDto {
  @Matches(/^(?=[A-Za-z])([A-Za-z]+\s?)*$/, {
    message: 'Username must be alphabetic with optional spaces.',
  })
  username: string;
  feedback: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber('NG')
  number: string;
  @IsStrongPassword()
  password: string;
  @IsOptional()
  dateJoined: Date;
}
