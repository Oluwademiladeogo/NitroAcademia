import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/Users';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async createUser(data: object) {
    await this.userRepository.save(data);
  }
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findBy({ email: email });
    if (user.length > 0) {
      console.log(user);
      return user;
    }
  }
}
