import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { authHelper } from 'src/helpers/auth.helper';

@Injectable()
export class AuthService {
  constructor(
    private authHelper: authHelper,
    private UsersService: UsersService,
  ) {}
  async validateUser(email: string, password: string) {
    const user: any = await this.UsersService.findUserByEmail(email);
    if (user) {
      const pw = await this.authHelper.compare(password, user.password);
      if (!pw) return null;
      return user;
    } else {
      return null;
    }
  }
}
