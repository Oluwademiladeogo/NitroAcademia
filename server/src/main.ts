import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from "passport"
import * as dotenv from "dotenv"
import * as session from "express-session"
dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: process.env.SESSION_SCRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 259200000}
  }))
  app.enableCors()
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(3000);
}
bootstrap();
