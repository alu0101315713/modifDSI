// /** El servidor debe recibir la petición del cliente, procesarla, esto es, ejecutar el comando solicitado,
//  * y devolver la respuesta del comando al cliente. Para ello, piense que el comando solicitado puede haberse
//  * ejecutado correctamente o puede haber fallado, por ejemplo, por no existir o porque se le han pasado unos
//  * argumentos no válidos. Solo se pueden usar sockets*/

// import * as net from 'net';
// import {spawn} from 'child_process';

// export class Server {
//   constructor() {}
//   server() {
//     const command = process.argv[2];
//     net.createServer({allowHalfOpen: true}, (connection) => {
//       console.log('A client has connected.');
//       connection.write(JSON.stringify({'type': 'command', 'command': command}) +
//                                   '\n');
//       // we recieved the arguments from the client and make a spawn of the command
//       connection.on('end', (data: any) => {
//         const args = JSON.parse(data.toString()).args;
//         const options = spawn(command, args, {shell: true});
//         options.stdout.on('data', (data) => {
//           connection.write(data);
//         });
//         options.stderr.on('data', (data) => {
//           connection.write(data);
//         });
//         options.on('close', (code) => {
//           connection.write(JSON.stringify({'type': 'exit', 'code': code}) +
//                                           '\n');
//         });
//       });
//       connection.on('close', () => {
//         console.log('A client has disconnected.');
//       });
//     }).listen(60300, () => {
//       console.log('Waiting for clients to connect.');
//     });
//   }
// }

// const server = new Server();
// server.server();
