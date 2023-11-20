import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupController } from './signup/controller/signup/signup.controller';
import { UsersService } from './services/users/users.service';
import { LoginController } from './login/controller/login/login.controller';
import { CoursesController } from './courses/controller/courses/courses.controller';
import { CoursesService } from './services/courses/courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/Users';
import { authHelper } from './helpers/auth.helper';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/local.strategy';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'oluwademilade',
      password: 'Password123#@!',
      database: 'nitro_academia',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    PassportModule,
  ],
  controllers: [
    AppController,
    SignupController,
    LoginController,
    CoursesController,
  ],
  providers: [
    AppService,
    UsersService,
    CoursesService,
    authHelper,
    AuthService,
    UsersService,
    LocalStrategy,
  ],
})
export class AppModule {}
