import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupController } from './signup/controller/signup/signup.controller';
import { UsersService } from './services/users/users.service';
import { LoginController } from './login/controller/login/login.controller';
import { CoursesController } from './courses/controller/courses/courses.controller';
import { CoursesService } from './services/courses/courses.service';

@Module({
  imports: [],
  controllers: [AppController, SignupController, LoginController, CoursesController],
  providers: [AppService, UsersService, CoursesService],
})
export class AppModule {}
