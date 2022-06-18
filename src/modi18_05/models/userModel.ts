
import {UserSchema} from '../schemas/userSchema';
import {model} from 'mongoose';
import {User} from '../interfaces/userInterface';

export const UserModel = model<User>('User', UserSchema);
