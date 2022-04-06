// /**
//  * Diseñe una interfaz genérica 'Arithmeticable', que defina los siguientes métodos con los que debería contar una clase que implemente dicha interfaz genérica: add, substract, multiply, divide.
//  */
// // interface Arithmeticable<T> {
//   /**
//    * @param num Sumará un segundo numero de tipo T
//   */
// //   add(num : T): T;
//   /**
//    * @param num Restará un segundo numero de tipo T
//    */
// //   substract(num : T) : T;
//   /**
//    * @param num Multiplicará un segundo numero de tipo T
//    */
// //   multiply(num : T) : T;
//   /**
//    * @param num Dividirá un segundo numero de tipo T
//    */
// //   divide(num : T) : T;
// // }
// /**
//  * Diseñe una clase genérica 'ArithmeticableCollection' cuyo parámetro de tipo genérico 'T' 
//  * se encuentre restringido a la forma definida por la interfaz 'Arithmeticable'. 
//  * Dicha clase genérica deberá contar, al menos, con los métodos 'addArithmeticable' (añadir un elemento a la colección), 
//  * 'getArithmeticable' (obtener un elemento de la colección) y 'getNumberOfArithmeticables' (obtener el tamaño de la colección), 
//  * además de con un array de elementos cuyo tipo sea T.
//  */
// // export class ArithmeticableCollection<T extends Arithmeticable<T>> {
// //   constructor(protected items : T[]) {}
//   /**
//    * 
//    * @param other variable tipo T
//    * @returns Añade un segundo numero de tipo T al array
//    */
// /*  addArithmeticable(other : T) : T[] {
//     this.items.push(other);
//     return this.items;
//   }*/
//   /**
//    * @param num variable tipo T
//    * @returns Recoge una variable de tipo T del array.
//    */
// /*  getArithmeticable(num: number): T {
//     return this.items[num];
//   }*/
//   /**
//    * @returns Recoge el numero de variables de tipo T
//    */
// /*  getNumberOfArithmeticables() {
//     return this.items.length;
//   }
// }*/

// /**
//  * Diseñe una clase 'Complex'que implementa la interfaz 'Arithmeticable'.
//  */
// /* export class Complex implements Arithmeticable<Complex> {
//   constructor(protected real: number,
//     protected imagin: number) {}
//   valueOfreal(): number {
//     return this.real.valueOf();
//   }

//   valueOfimg(): number {
//     return this.imagin.valueOf();
//   }
// */
//   /**
//    * @param num Numero de tipo Complejo que sumará al complejo
//    * @return Retorna la suma de complejos
//    */
//   /* add(num : Complex, img: Complex) {
//     return new Complex(this.real + num.valueOfreal(), this.imagin + img.valueOfimg());
//   }*/
//   /**
//    * @param other Numero de tipo Complejo
//    * @returns Retorna la resta de complejos
//    */
// /*  substract(num : Complex, img: Complex) {
//     return new Complex(this.real - num.valueOfreal(), this.imagin - img.valueOfimg());
//   }*/
//   /**
//    * @param other Numero de tipo Complejo
//    * @return Retorna la multiplciacion de complejos
//    */
// /*  multiply(other: Complex) {
//     return;
//   }*/
//   /**
//    * @param other Numero de tipo Complejo que sumará al complejo
//    * @return Retorna la división de complejos
//    */
// /*  divide(other: Complex) {
//     return;
//   }
// }*/

// /**
//  * Diseñe una clase 'Rational' que implementa la interfaz 'Arithmeticable'.
//  */
// /* export class Rational implements Arithmeticable<Rational> {
//   constructor(protected numerador: number,
//     protected denominador: number) {}*/
//   /**
//    * @param num Numero de tipo Rational que sumará al Rational
//    * @return Retorna la suma de Racionales
//    */
// /*  add(num : Rational) {
//     return new Rational(this.numerador - this.numerador, this.denominador - this.denominador);
//   }*/
//   /**
//    * @param num Numero de tipo Rational que restará al Rational
//    * @return Retorna la resta de Racionales
//    */
// /*  substract(other: Rational) {
//     return new Rational(this.numerador - this.numerador, this.denominador - this.denominador);
//   }*/
//   /**
//    * @param num Numero de tipo Rational que multiplicará al Rational
//    * @return Retorna la multiplicación de Racionales
//    */
// /*  multiply(other: Rational) {
//     return new Rational(this.numerador * this.numerador, this.denominador * this.denominador);
//   }*/
//   /**
//    * @param num Numero de tipo Rational que dividirá al Rational
//    * @return Retorna la división de Racionales
//    */
// /*   divide(other: Rational) {
//     return new Rational(this.numerador / this.numerador, this.denominador / this.denominador);
//   }
// }

// export class ArithmeticableCollection<T> implements Complex<T>, Rational<T> {

// }*/
