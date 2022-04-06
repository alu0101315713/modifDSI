// namespace App {
//     export class FigureCollection<T extends TwoDimensionalFigure | ThreeDimensionalFigure> {
//       constructor(private figures: T[]) {
//       }

//       addFigure(newFigure: T) {
//         this.figures.push(newFigure);
//       }

//       getNumberOfFigures() {
//         return this.figures.length;
//       }

//       getFigure(index: number) {
//         return this.figures[index];
//       }

//       print() {
//         this.figures.forEach((figure) => {
//           figure.print();
//         });
//       }
//     }
//   }

