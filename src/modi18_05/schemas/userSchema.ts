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
  dni: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      let pattern = /^[0-9]{8}[A-Z]$/;
      // let pattern = /([0-9]){8}([A-Za-z]){1}/;
      let result = value.match(pattern)?.toString();
      if (result === undefined) {
        throw new Error('Password format not valid, try again.');
      }
    },
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  sport: {
    type: String,
    required: true,
    trim: true,
  },
  expert: {
    type: String,
    required: true,
    trim: true,
  },
  record: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
});
