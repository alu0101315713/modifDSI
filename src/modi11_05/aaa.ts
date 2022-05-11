import * as express from 'express';
import * as chalk from 'chalk';
import {execmdSpawn} from './commands';
import {spawn} from 'child_process';
/**
 * Clase servidor que ejecuta comandos
 * @class Server
 */
export class Server {
  private app = express();
  private child_: any;
  constructor() {}
  /**
   * Inicia el servidor
   */
  public start() {
    this.app.get('/', (_, res) => {
      res.send('<h1>My application</h1>');
    });

    this.app.get('/execmd', (req: {query: {cmd: string, args: string}}, res) => {
      console.log(req.query);
      if (!req.query.cmd) {
        res.status(400).send({"error": "Missing command"});
        return;
      }
      execmdSpawn(req.query.cmd as string, req.query.args as string, (err, _) => {
        if (err) {
          res.send({
            "error": 'You must provide a cmd command!',
          });
        } else {
        // res.send(data?.resolve);
          if ((req.query.args)) {
            console.log(chalk.green(`Client: ${req.query.cmd} ${req.query.args.split(',')}`));
            this.child_ = spawn(req.query.cmd, req.query.args.split(','));
          } else {
            console.log(chalk.green(`Client: ${req.query.cmd}`));
            this.child_ = spawn(req.query.cmd);
          }
        }
        let result: string = "";
        let error: string = "";
        this.child_.stdout.on('data', (newData: string) => {
          result += newData;
        });
        this.child_.stderr.on('data', (newData: string) => {
          error += newData;
        });
        this.child_.on('error', (newData: string) => {
          error = newData;
        });
        this.child_.on('close', (childCode: number, childSignal: any) => {
          if (childCode < 0) {
            return res.send({
              "code": childCode,
              "signal": childSignal,
              "error": `Unable to execute the command ${req.query.cmd} ${req.query.args}`,
            });
          } else if (childCode > 0) {
            return res.send({
              "code": childCode,
              "signal": childSignal,
              "error": error,
            });
          } else {
            return res.send({
              "code": childCode,
              "signal": childSignal,
              "result": result,
            });
          }
        });
      });
    });

    this.app.get('*', (_, res) => {
      res.send('<h1>404</h1>');
    });

    this.app.listen(3000, () => {
      console.log('Server is up on port 3000');
    });
  }
}

const server = new Server();
server.start();
// const app = express();
// let child_: any;

// // app.use(express.static(join(__dirname, '../public')));
// app.get('/', (_, res) => {
//   res.send('<h1>My application</h1>');
// });

// app.get('/execmd', (req: {query: {cmd: string, args: string}}, res) => {
//   console.log(req.query);
//   if (!req.query.cmd) {
//     res.status(400).send({"error": "Missing command"});
//     return;
//   }
//   execmdSpawn(req.query.cmd as string, req.query.args as string, (err, _) => {
//     if (err) {
//       res.send({
//         "error": 'You must provide a cmd command!',
//       });
//     } else {
//     // res.send(data?.resolve);
//       if ((req.query.args)) {
//         console.log(chalk.green(`Client: ${req.query.cmd} ${req.query.args.split(',')}`));
//         child_ = spawn(req.query.cmd, req.query.args.split(','));
//       } else {
//         console.log(chalk.green(`Client: ${req.query.cmd}`));
//         child_ = spawn(req.query.cmd);
//       }
//     }
//     let result: string = "";
//     let error: string = "";
//     console.log(error);
//     child_.stdout.on('data', (newData: string) => {
//       result += newData;
//     });
//     child_.stderr.on('data', (newData: string) => {
//       error += newData;
//     });
//     child_.on('error', (newData: string) => {
//       error += newData;
//     });
//     child_.on('close', (childCode: number, childSignal: any) => {
//       if (childCode < 0) {
//         return res.send({
//           "code": childCode,
//           "signal": childSignal,
//           "error": `Unable to execute the command ${req.query.cmd} ${req.query.args}`,
//         });
//       } else if (childCode > 0) {
//         return res.send({
//           "code": childCode,
//           "signal": childSignal,
//           "error": `Command ${req.query.cmd} ${req.query.args} exited with code ${childCode}`,
//         });
//       } else {
//         return res.send({
//           "code": childCode,
//           "signal": childSignal,
//           "result": result,
//         });
//       }
//     });
//   });
// });

// app.get('*', (_, res) => {
//   res.send('<h1>404</h1>');
// });

// app.listen(3000, () => {
//   console.log('Server is up on port 3000');
// });
