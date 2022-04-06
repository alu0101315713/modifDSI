// // /// <reference path="abstracts/TwoDimensionalFigure.ts"/>
// // /// <reference path="abstracts/ThreeDimensionalFigure.ts"/>
// // /// <reference path="collections/FigureCollection.ts"/>
// // /// <reference path="figures/Rectangle.ts"/>
// // /// <reference path="figures/Cube.ts"/>

// // namespace App {
// //   const myTwoDimensionalFigureCollection =
// //     new FigureCollection<TwoDimensionalFigure>([
// //       new Rectangle('RedRectangle', 'red', 10, 5),
// //       new Rectangle('GreenRectangle', 'green', 5, 30),
// //     ]);

// //   const myThreeDimensionalFigureCollection =
// //     new FigureCollection<ThreeDimensionalFigure>([
// //       new Cube('RedCube', 'red', 10, 5, 4),
// //       new Cube('GreenCube', 'green', 5, 30, 7),
// //     ]);

// //   myTwoDimensionalFigureCollection.print();
// //   myThreeDimensionalFigureCollection.print();
// // }

// // type ColorType = 'red' | 'yellow' | 'blue' | 'green';

// // /**
// //  * This class declares an abstract factory method (or a default factory
// //  * method) that returns a TwoDimensionalFigure object. Subclasses may
// //  * provide a particular implementation of this method.
// //  */
// // abstract class TwoDimensionalFigureCreator {
// //   public abstract factoryMethod(): TwoDimensionalFigure;
// //   /**
// //    * Logic that relies on TwoDimensionalFigure objects returned by
// //    * the factory method. Subclasses can change this logic indirectly
// //    * by overriding the factory method and returning a different
// //    * TwoDimensionalFigure object.
// //    */
// //   public logic(): string {
// //     const twoDimensionalFigure = this.factoryMethod();
// //     return `I am a ${twoDimensionalFigure.getName()}, ` +
// //            `I am ${twoDimensionalFigure.getColor()} and ` +
// //            `my area is equal to ${twoDimensionalFigure.getArea()}`;
// //   }
// // }

// // /**
// //  * Concrete implementation of the class TwoDimensionalFigureCreator that
// //  * returns Rectangle objects through the factory method. It can be observed
// //  * how the concrete implementation of the factory method still returns
// //  * a TwoDimensionalFigure object, which is an abstract type
// //  */
// // class RectangleCreator extends TwoDimensionalFigureCreator {
// //   constructor(private readonly name: string, private color: ColorType,
// //     private base: number, private height: number) {
// //     super();
// //   }
// //   public factoryMethod(): TwoDimensionalFigure {
// //     return new Rectangle(this.name, this.color, this.base, this.height);
// //   }
// // }

// // /**
// //  * Concrete implementation of the class TwoDimensionalFigureCreator that
// //  * returns Circle objects through the factory method. It can be observed
// //  * how the concrete implementation of the factory method still returns
// //  * a TwoDimensionalFigure object, which is an abstract type
// //  */
// // class CircleCreator extends TwoDimensionalFigureCreator {
// //   constructor(private readonly name: string, private color: ColorType,
// //     private radius: number) {
// //     super();
// //   }
// //   public factoryMethod(): TwoDimensionalFigure {
// //     return new Circle(this.name, this.color, this.radius);
// //   }
// // }

// // /**
// //  * Interface that declares all the common functionality that concrete
// //  * TwoDimensionalFigure objects have to implement
// //  */
// // interface TwoDimensionalFigure {
// //   getName(): string;
// //   getColor(): ColorType;
// //   getArea(): number;
// // }

// // /**
// //  * Class that provides a concrete implementation of a TwoDimensionalFigure object
// //  */
// // class Rectangle implements TwoDimensionalFigure {
// //   private readonly sides = 4;

// //   constructor(private readonly name: string, private color: ColorType,
// //     private base: number = 1, private height: number = 1) {
// //   }

// //   getSides() {
// //     return this.sides;
// //   }
// //   getName() {
// //     return this.name;
// //   }
// //   getColor() {
// //     return this.color;
// //   }
// //   getBase() {
// //     return this.base;
// //   }
// //   getHeight() {
// //     return this.height;
// //   }

// //   setColor(color: ColorType) {
// //     this.color = color;
// //   }
// //   setBase(base: number) {
// //     this.base = base;
// //   }
// //   setHeight(height: number) {
// //     this.height = height;
// //   }

// //   getArea() {
// //     return this.base * this.height;
// //   }
// // }

// // /**
// //  * Class that provides a concrete implementation of a TwoDimensionalFigure object
// //  */
// // class Circle implements TwoDimensionalFigure {
// //   constructor(private readonly name: string, private color: ColorType,
// //     private radius: number = 1) {
// //   }

// //   getName() {
// //     return this.name;
// //   }
// //   getColor() {
// //     return this.color;
// //   }
// //   getRadius() {
// //     return this.radius;
// //   }

// //   setColor(color: ColorType) {
// //     this.color = color;
// //   }
// //   setRadius(radius: number) {
// //     this.radius = radius;
// //   }

// //   getArea() {
// //     return Math.PI * Math.pow(this.radius, 2);
// //   }
// // }

// // /**
// //  * Client code that works with an instance of a concrete creator through its
// //  * common superclass TwoDimensionalFigureCreator.
// //  */
// // function clientCode(twoDimensionalFigureCreator: TwoDimensionalFigureCreator) {
// //   console.log(twoDimensionalFigureCreator.logic());
// // }

// // clientCode(new RectangleCreator('RedRectangle', 'red', 10, 5));
// // clientCode(new CircleCreator('BlueCircle', 'blue', 7));

// /**
//  * Interface for observable classes
// //  */
// //  interface Observable {
// //   subscribe(observer: Observer): void;
// //   unsubscribe(observer: Observer): void;
// //   notify(): void;
// // }

// // /**
// //  * Interface for observer classes
// //  */
// // interface Observer {
// //   update(observable: Observable): void;
// // }

// // enum ButtonClickEventType {'NO_EVENT', 'LEFTCLICK', 'RIGHTCLICK', 'CENTERCLICK'};

// // /**
// //  * Class Button that implements the Observable interface, i.e.,
// //  * Button objects can be observed
// //  */
// // class Button implements Observable {
// //   private observers: Observer[] = [];

// //   private eventType: ButtonClickEventType = ButtonClickEventType.NO_EVENT;

// //   constructor(private id: number, private name: string) {
// //   }

// //   getId() {
// //     return this.id;
// //   }
// //   getName() {
// //     return this.name;
// //   }
// //   getEventType() {
// //     return this.eventType;
// //   }

// //   subscribe(observer: Observer) {
// //     if (this.observers.includes(observer)) {
// //       throw new Error('The observer had already been subscribed');
// //     } else {
// //       this.observers.push(observer);
// //     }
// //   }

// //   unsubscribe(observer: Observer) {
// //     const index = this.observers.indexOf(observer);
// //     if (index === -1) {
// //       throw new Error('The observer has not been subscribed');
// //     } else {
// //       this.observers.splice(index, 1);
// //     }
// //   }

// //   notify() {
// //     this.observers.forEach((observer) => observer.update(this));
// //   }

// //   onLeftClick() {
// //     this.eventType = ButtonClickEventType.LEFTCLICK;
// //     this.notify();
// //   }
  
// //   onRightClick() {
// //     this.eventType = ButtonClickEventType.RIGHTCLICK;
// //     this.notify();
// //   }
// //   onCenterClick() {
// //     this.eventType = ButtonClickEventType.CENTERCLICK;
// //     this.notify();
// //   }
// // }

// // /**
// //  * Class ButtonObserver that implements the interface Observer, i.e.,
// //  * it is able to observe other objects
// //  */
// // class ButtonObserver implements Observer {
// //   constructor(private id: number, private name: string) {
// //   }

// //   getId() {
// //     return this.id;
// //   }
// //   getName() {
// //     return this.name;
// //   }

// //   update(observable: Observable) {
// //     if (observable instanceof Button) {
// //       switch(observable.getEventType()) {
// //         case ButtonClickEventType.LEFTCLICK:
// //           console.log(`I am a ButtonObserver called ${this.name} ` +
// //                       `and I have observed that Button ${observable.getName()} ` +
// //                       `was left-clicked with the mouse`);
// //           break;
// //         case ButtonClickEventType.RIGHTCLICK:
// //           console.log(`I am a ButtonObserver called ${this.name} ` +
// //                       `and I have observed that Button ${observable.getName()} ` +
// //                       `was right-clicked with the mouse`);
// //           break;
// //         case ButtonClickEventType.CENTERCLICK:
// //           console.log(`I am a ButtonObserver called ${this.name} ` +
// //                       `and I have observed that Button ${observable.getName()} ` +
// //                       `was center-clicked with the mouse`);
// //           break;
// //       }
// //     }
// //   }
// // }

// // // Client code
// // const myButton = new Button(0, 'myButton');
// // const firstButtonObserver = new ButtonObserver(0, 'firstButtonObserver');
// // const secondButtonObserver = new ButtonObserver(1, 'secondButtonObserver');

// // console.log('firstButtonObserver subscription');
// // myButton.subscribe(firstButtonObserver);

// // console.log('secondButtonObserver subscription');
// // myButton.subscribe(secondButtonObserver);

// // try {
// //   myButton.subscribe(secondButtonObserver);
// // } catch (error) {
// //   console.log('secondButtonObserver was already subscribed');
// // }

// // console.log('myButton left click');
// // myButton.onLeftClick();

// // console.log('firstButtonObserver unsubscription');
// // myButton.unsubscribe(firstButtonObserver);

// // console.log('myButton right click');
// // myButton.onRightClick();
// // console.log('myButton center click');
// // myButton.onCenterClick();

// /**
//  * This is an example of context class
//  */
// class Solver {
//   /**
//    * The context has a reference to a Strategy object. It should only works
//    * with strategies through the Strategy interface
//    */
//   constructor(private data: number[], private strategy: Strategy) {
//   }

//   /**
//    * A setter is required in order to change the strategy in execution time
//    * @param strategy Current strategy applied
//    */
//   setStrategy(strategy: Strategy) {
//     this.strategy = strategy;
//   }

//   /**
//    * The context delegates some work to the Strategy object
//    */
//   logic() {
//     this.strategy.execute(this.data);
//   }
// }

// /**
//  * Common interface to all Strategy objects. The context uses this
//  * interface to work with strategies
//  */
// interface Strategy {
//   execute(data: number[]): void;
// }

// /**
//  * Some concrete strategy
//  */
// class FirstAlgorithm implements Strategy {
//   execute(data: number[]) {
//     console.log(`First algorithm applied to ${data}`);
//   }
// }

// /**
//  * Some concrete strategy
//  */
// class SecondAlgorithm implements Strategy {
//   execute(data: number[]) {
//     console.log(`Second algorithm applied to ${data}`);
//   }
// }

// /**
//  * Some concrete strategy
//  */
// class ThirdAlgorithm implements Strategy {
//   execute(data: number[]) {
//     console.log(`Third algorithm applied to ${data}`);
//   }
// }

// // Client code
// const mySolver = new Solver([1, 2, 3], new FirstAlgorithm());
// mySolver.logic();

// mySolver.setStrategy(new SecondAlgorithm());
// mySolver.logic();

// mySolver.setStrategy(new ThirdAlgorithm());
// mySolver.logic();

