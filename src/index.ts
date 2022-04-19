import {writeFile} from 'fs';

writeFile('helloworld.txt', 'Hello World!', (err) => {
  if (err) {
    console.log('Something went wrong when writing your file');
  } else {
    console.log('File helloworld.txt has just been created');
  }
});

