import './db/dataBase';
import {User} from './interfaces/userInterface';
/**
 * @description We made the Mongoose Operations
 */
export class MongooseOperations {
  constructor() {
  }
  /**
   * @param newUser We add a new user
   */
  public addOperation(newUser: User) {
    newUser.save().then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  /**
   * @param newUser We delete a user
   */
  public deleteOperation(newUser: User) {
    newUser.deleteOne();
  }
  /**
   * @param newUser We patch a user
   */
  public patchOperation(newUser: User) {
    newUser.updateOne().then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  /**
   * @param newUser We search a user
   */
  public searchOperation(newUser: User) {
    newUser.get(newUser.name);
  }
}
