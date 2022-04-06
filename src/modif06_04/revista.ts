/**
 * Interface for observable classes
 */
export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
  }
  
  /**
   * Interface for observer classes
   */
export interface Observer {
    update(observable: Observable): void;
  }
/**
 * Selects the event type
 */
export enum ButtonClickEventType {'NO_EVENT', 'NUEVA_REVISTA'};
  
  /**
   * Class Revista that implements the Observable interface,
   * Button objects can be observed
   */
  export class Revista implements Observable {
    protected observers: Observer[] = [];

    protected eventType: ButtonClickEventType = ButtonClickEventType.NO_EVENT;
    /**
     * Creates the object from Revista
     * @param id id from Revista
     * @param name name from Revista
     */
    constructor(protected id: number, protected name: string) {
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
     * @returns the event type
     */
    getEventType() {
      return this.eventType;
    }
    /**
     * See if the Object is already subscribed
     * @param observer Observer's object
     */
    subscribe(observer: Observer) {
      if (this.observers.includes(observer)) {
        throw new Error('The observer had already been subscribed');
      } else {
        this.observers.push(observer);
      }
    }
    /**
     * Unsubscribe the object from the observable
     */
    unsubscribe(observer: Observer) {
      const index = this.observers.indexOf(observer);
      if (index === -1) {
        throw new Error('The observer has not been subscribed');
      } else {
        this.observers.splice(index, 1);
      }
    }
    /**
     * Notify the observers of the new Revista's Objects
     */
    notify() {
      this.observers.forEach((observer) => observer.update(this));
    }
    /**
     * Takes the event NUEVA_REVISTA and notifies
     */
    nuevaRevista() {
      this.eventType = ButtonClickEventType.NUEVA_REVISTA;
      this.notify();
    }
  }
