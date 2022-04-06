import {Revista} from './revista';
import {Observer} from './revista';
import {Observable} from './revista';
import {ButtonClickEventType} from './revista';
/**
   * Class ButtonObserver that implements the interface Observer, i.e.,
   * it is able to observe other objects
   */
export class Subscriptor extends Revista implements Observer {
  constructor(protected id: number, protected name: string) {
    super(id, name);
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  update(observable: Observable) {
    if (observable instanceof Revista) {
      switch (observable.getEventType()) {
        case ButtonClickEventType.LEFTCLICK:
          console.log(`I am a ButtonObserver called ${this.name} ` +
                        `and I have observed that Button ${observable.getName()} ` +
                        `was left-clicked with the mouse`);
          break;
        case ButtonClickEventType.RIGHTCLICK:
          console.log(`I am a ButtonObserver called ${this.name} ` +
                        `and I have observed that Button ${observable.getName()} ` +
                        `was right-clicked with the mouse`);
          break;
        case ButtonClickEventType.CENTERCLICK:
          console.log(`I am a ButtonObserver called ${this.name} ` +
                        `and I have observed that Button ${observable.getName()} ` +
                        `was center-clicked with the mouse`);
          break;
        case ButtonClickEventType.NUEVA_REVISTA:
          console.log(`La revista ha sacado ${observable.getName()}!`);
      }
    }
  }
}
