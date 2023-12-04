import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
@Injectable()
export class sessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void) {
    console.log(user)
    done(null, user);
  }
  deserializeUser(payload: any, done: (err: Error, user: any) => void) {
    console.log(payload)
    done(null, payload);
  }
}
