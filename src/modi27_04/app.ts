import {watch} from 'fs';
import {spawn} from 'child_process';

export class Reader {
  constructor(private file: string) {
    // this.observe();
    this.ls();
  }

  read() {
    const cat = spawn('cat', ['-n', this.file]);
    cat.stdout.pipe(process.stdout);
  }
  grep() {
    const grep = spawn('grep', ['hola', this.file]);
    grep.stdout.pipe(process.stdout);
  }

  // We use Watch to observe changes and see if the file has been removed while it is being observed
  observe() {
    watch(this.file, (eventType, filename) => {
      if (eventType === 'rename') {
        console.log(`${filename} has been renamed`);
      } else if (eventType === 'change') {
        console.log(`${filename} has been changed`);
      } else if (eventType === 'delete') {
        console.log(`${filename} has been deleted`);
      }
    });
    // If the file is deleted, the watch will not be triggered
    // So we need to use a timeout to wait for the file to be created
    setTimeout(() => {
      this.read();
    }
    , 1000);
  }

  // We save the result of a ls -l -h command each components separated by commas in a array
  ls() {
    const ls = spawn('ls', ['-l', '-h', this.file]);
    ls.stdout.on('data', (data) => {
      const lines = data.toString().split(' ');
      const result = [];
      for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== '') {
          const line = lines[i].split(' ');
          result.push(line[0]);
        }
      }
      console.log(result);
      ls.stdout.pipe(process.stdout);
    });
  }
  // ls.stdout.pipe(process.stdout);
  // }
}

const fichero = new Reader('helloworld.txt');

// console.log(fichero.read());
console.log(fichero.ls());
// console.log(fichero.grep());
