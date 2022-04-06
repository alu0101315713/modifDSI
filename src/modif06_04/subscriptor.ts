import {Revista} from './revista';
import {Observer} from './revista';
import {Observable} from './revista';
import {ButtonClickEventType} from './revista';
/**
   * Class Subscriptor that extends the class Revista and implements the interface Observer,
   * it is able to observe other objects
   */
export class Subscriptor extends Revista implements Observer {
  /**
   * Creates the Subscriptor
   * @param id Takes the id of the subscriptor
   * @param name Takes the name of the subscriptor
   */
  constructor(protected id: number, protected name: string) {
    super(id, name);
  }
  /**
   * @returns Subscriptor's id
   */
  getId() {
    return this.id;
  }
  /**
   * @returns Subscriptor's name
   */
  getName() {
    return this.name;
  }
  /**
   * Sees if its a object from Revista an updates its information
   * @param observable Revista's object
   */
  update(observable: Observable) {
    if (observable instanceof Revista) {
      switch (observable.getEventType()) {
        case ButtonClickEventType.NUEVA_REVISTA:
          console.log(`La revista ha sacado ${observable.getName()}!`);
          break;
      }
    }
  }
}
