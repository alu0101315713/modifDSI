/**
 * Abstract class which map and reduce an array
 */
export abstract class CreatorClass {
  protected results: number[];
  /**
   * Create a new array
   * @param values the object
   */
  constructor(
      protected values: number[]) {
    this.results = [];
  }
  /**
   * Template method that defines the skeleton of an Evolutionary Algorithm
   */
  public run() {
    this.beforeMap();
    this.beforeReduce();
    this.afterReduce();
    return this.results;
  }

  /**
   * Map method for arrays
   */
  public static map<T, U>(array: T[], callback: (element: T, index: number) => U): U[] {
    const result: U[] = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i));
    }
    return result;
  }
  /**
   * Reduce method for arrays
   */
  protected abstract reduce(callback: (accumulator: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any;
  /**
   * Before map method for arrays
   */
  protected beforeMap(): void {}
  /**
   * Before reduce method for arrays
   */
  protected beforeReduce(): void {}
  /**
   * After reduce method for arrays
   */
  protected afterReduce(): void {}
}

/**
 * Class which extends the SuperCreator class and implements the reduce method for arrays and objects and add using reduce and map methods
 */
export class AddMapReduce extends CreatorClass {
  /**
    * @param values the object
  */
  constructor(protected values: number[]) {
    super(values);
  }
  /**
   * @param callback has the signature (accumulator, currentValue, currentIndex, array) => any
   * @param initialValue has the signature any
   * @returns the result of the reduce method
   */
  public reduce(callback: (accumulator: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any {
    return this.values.reduce(callback, initialValue);
  }
  /**
   * Before map method for arrays
   */
  public afterReduce() {
    let total: number = 0;
    this.values.forEach((element) => {
      total += element;
    });
    this.results.push(total);
    console.log(`AddMapReduce: ${this.results}`);
  }
}

/**
 * Class which extends the SuperCreator class and implements the reduce method for arrays and objects and substract using reduce and map methods
 */
export class SubMapReduce extends CreatorClass {
  /**
  * @param values the object
  */
  constructor(protected values: number[]) {
    super(values);
  }

  /**
   * @param callback has the signature (accumulator, currentValue, currentIndex, array) => any
   * @param initialValue initial value
   * @returns the result of the reduce method
   */
  public reduce(callback: (accumulator: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any {
    return this.values.reduce(callback, initialValue);
  }
  /**
   * Before map method for arrays
   */
  public afterReduce() {
    let total: number = 0;
    this.values.forEach((element) => {
      total -= element;
    });
    this.results.push(total);
    console.log(`SubMapReduce: ${this.results}`);
  }
}

/**
 * Class which extends the SuperCreator class and implements the reduce method for arrays and objects and multiply using reduce and map methods
 */
export class ProdMapReduce extends CreatorClass {
  /**
    * @param values the object
  */
  constructor(protected values: number[]) {
    super(values);
  }
  /**
   * @param callback has the signature (accumulator, currentValue, currentIndex, array) => any
   */
  public reduce(callback: (accumulator: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any {
    return this.values.reduce(callback, initialValue);
  }
  /**
   * Before map method for arrays
   */
  public afterReduce() {
    let total: number = 1;
    this.values.forEach((element) => {
      total *= element;
    });
    this.results.push(total);
    console.log(`ProdMapReduce: ${this.results}`);
  }
}

/**
 * Class which extends the SuperCreator class and implements the reduce method for arrays and objects and divide using reduce and map methods using a Template Method
 */
export class DivMapReduce extends CreatorClass {
  constructor(protected values: number[]) {
    super(values);
  }
  /**
   * @param callback has the signature (accumulator, currentValue, currentIndex, array) => any
   * @param initialValue has the signature any
   * @returns the result of the reduce method
   */
  public reduce(callback: (accumulator: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any {
    return this.values.reduce(callback, initialValue);
  }
  /**
   * Before map method for arrays
   */
  public afterReduce() {
    let total: number = 1;
    this.values.forEach((element) => {
      total /= element;
    });
    this.results.push(total);
    console.log(`DivMapReduce: ${this.results}`);
  }
}

/**
 * Client code
 */
function clientCode(CreatorClass: CreatorClass) {
  // const values = [1, 2, 3, 4, 5];
  // const values: CreatorClass: number: any[] = [1, 2, 3, 4, 5];
  CreatorClass.run();
  // console.log(CreatorClass.results);
}

clientCode(new AddMapReduce([1, 2, 2]));
clientCode(new SubMapReduce([1, 2, 2]));
clientCode(new ProdMapReduce([1, 2, 2]));
clientCode(new DivMapReduce([1, 2, 2]));


