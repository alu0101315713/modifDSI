/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
import './db/dataBase';
import {User} from './interfaces/userInterface';

export class MongooseOperations {
  constructor() {
  }
  public addOperation(newUser: User) {
    newUser.save().then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  public deleteOperation(newUser: User) {
    newUser.deleteOne();
  }
  public patchOperation(newUser: User) {
    newUser.updateOne().then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  public searchOperation(newUser: User) {
    newUser.get(newUser.name);
  }
}
