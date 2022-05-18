/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import {User} from '../interfaces/userInterface';
import {Schema} from 'mongoose';
// let validator = require('validator');

export const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
    trim: true,
    uniq: true,
  },
  surnames: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
      let result = value.match(pattern)?.toString();
      if (result === undefined) {
        throw new Error('Password format not valid, try again.');
      }
    },
  },
});
