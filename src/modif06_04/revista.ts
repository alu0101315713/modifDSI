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
  
export enum ButtonClickEventType {'NO_EVENT', 'LEFTCLICK', 'RIGHTCLICK', 'CENTERCLICK', 'NUEVA_REVISTA'};
  
  /**
   * Class Button that implements the Observable interface, i.e.,
   * Button objects can be observed
   */
  export class Revista implements Observable {
    protected observers: Observer[] = [];
  
    protected eventType: ButtonClickEventType = ButtonClickEventType.NO_EVENT;
  
    constructor(protected id: number, protected name: string) {
    }
  
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    getEventType() {
      return this.eventType;
    }
  
    subscribe(observer: Observer) {
      if (this.observers.includes(observer)) {
        throw new Error('The observer had already been subscribed');
      } else {
        this.observers.push(observer);
      }
    }
  
    unsubscribe(observer: Observer) {
      const index = this.observers.indexOf(observer);
      if (index === -1) {
        throw new Error('The observer has not been subscribed');
      } else {
        this.observers.splice(index, 1);
      }
    }
  
    notify() {
      this.observers.forEach((observer) => observer.update(this));
    }
  
    onLeftClick() {
      this.eventType = ButtonClickEventType.LEFTCLICK;
      this.notify();
    }
    
    onRightClick() {
      this.eventType = ButtonClickEventType.RIGHTCLICK;
      this.notify();
    }
    onCenterClick() {
      this.eventType = ButtonClickEventType.CENTERCLICK;
      this.notify();
    }
    nuevaRevista() {
      this.eventType = ButtonClickEventType.NUEVA_REVISTA;
      this.notify();
    }
  }
