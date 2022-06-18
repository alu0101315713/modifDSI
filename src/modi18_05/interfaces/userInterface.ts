import {Document} from 'mongoose';

export interface User extends Document {
  name: string,
  surnames: string,
  dni: string,
  age: number,
  sport: string,
  expert: string,
  record: number,
  email: string,
}
