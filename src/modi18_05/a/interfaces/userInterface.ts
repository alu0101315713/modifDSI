import {Document} from 'mongoose';

export interface User extends Document {
  name: string,
  surnames: string,
  age: number,
  email: string,
  password: string,
}
