// /* El cliente debe recibir, desde la línea de comandos,
// un comando Unix/Linux, además de sus argumentos correspondientes,
// que ejecutaremos en el servidor. */
// // import {spawn} from 'child_process';
// import * as net from 'net';

// export class Cliente {
//   constructor() {}
//   cliente() {
//     if (process.argv.length !== 3) {
//       console.log('Please, provide a command.');
//     } else {
//       const client = net.connect({port: 60300});
//       client.on('message', () => {
//         console.log('Connection established!');
//       });
//       // the client receive the command line and send it to the server
//       client.write(JSON.stringify({'type': 'command', 'command': process.argv[2]}) +
//                                   '\n');
//       client.end();
//     }
//   }
// }

// const cliente = new Cliente();
// cliente.cliente();
