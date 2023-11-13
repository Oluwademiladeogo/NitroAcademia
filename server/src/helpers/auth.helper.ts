import * as dotenv from 'dotenv';
dotenv.config()
export class authHelper {
  async encrypt(something: string) {
    console.log(`You called the encrypt function with ${something}`);
    return something;
  }
  async compare(something: string) {
    console.log(`You called the compare function with ${something}`);
  }
}
