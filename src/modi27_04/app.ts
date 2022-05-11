// // import {access, constants, watch} from 'fs';
// import {watch} from 'fs';
// import {spawn} from 'child_process';

// export class Reader {
//   // constructor(comando: string, opcion1: string, opcion2: string, private file: string) {}
//   /**
//    * Creamos el objeto
//    * @param file filename
//    */
//   constructor(private file: string) {
//     this.ls();
//     this.observe();
//   }

//   /**
//    * Comprobamos la existencia del fichero y de los argumentos
//    */
//   // main() {
//   //   if (process.argv.length !== 3) {
//   //     console.log('Please, specify a file');
//   //   } else {
//   //     const filename = process.argv[2];

//   //     access(filename, constants.F_OK, (err) => {
//   //       if (err) {
//   //         console.log(`File ${this.file} does not exist`);
//   //       } else {
//   //         console.log(`Starting to watch file ${this.file}`);

//   //         const watcher = watch(process.argv[2]);

//   //         watcher.on('change', () => {
//   //           console.log(`File ${this.file} has been modified somehow`);
//   //         });

//   //         console.log(`File ${filename} is no longer watched`);
//   //       }
//   //     });
//   //   }
//   // }

//   /**
//    * Observamos si surgen cambios o si se elimina el fichero
//    */
//   observe() {
//     watch(this.file, (eventType, filename) => {
//       if (eventType === 'rename') {
//         console.log(`${filename} has been renamed or removed`);
//       } else if (eventType === 'change') {
//         console.log(`${filename} has been changed`);
//         // this.ls();
//       }
//     });
//   }

//   /**
//    * Listamos los ficheros que hay en el directorio actual y lo guardamos en un array
//    */
//   ls() {
//     const ls = spawn('ls', ['-l', '-h', this.file]);
//     ls.stdout.on('data', (data) => {
//       const lines = data.toString().split(' ');
//       const result = [];
//       for (let i = 0; i < lines.length; i++) {
//         if (lines[i] !== '') {
//           const line = lines[i].split(' ');
//           result.push(line[0]);
//         }
//       }
//       console.log(result);
//       ls.stdout.pipe(process.stdout);
//     });
//   }
//   read() {
//     const cat = spawn('cat', ['-n', this.file]);
//     cat.stdout.pipe(process.stdout);
//   }
//   grep() {
//     const grep = spawn('grep', ['hola', this.file]);
//     grep.stdout.pipe(process.stdout);
//   }
// }

// const fichero = new Reader('helloworld.txt');

// // fichero.main();
// // console.log(fichero.read());
// // console.log(fichero.grep());
// console.log(fichero.observe());
// // console.log(fichero.ls());
