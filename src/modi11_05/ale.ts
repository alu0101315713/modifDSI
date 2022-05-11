// import chalk from 'chalk';
import * as express from 'express';
import {spawn} from 'child_process';

/**
 * Simple HTTP server.
 */
export class Server {
  private app_ = express();
  private child_: any;

  constructor(port: number) {
    this.app_.get('/execmd', (req: {query: {cmd: string, args: string}}, res: express.Response) => {
      if (!req.query.cmd) {
        res.status(400).send('Missing command');
        return;
      }
      if (req.query.args) {
        console.log(`Client: ${req.query.cmd} ${req.query.args.split(',')}`);
        this.child_ = spawn(req.query.cmd, req.query.args.split(' '));
      } else {
        console.log(`Client: ${req.query.cmd}`);
        this.child_ = spawn(req.query.cmd);
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
        error += newData;
      });

      this.child_.on('close', (childCode: number, childSignal: any) => {
        if (childCode < 0) {
          return res.send({
            code: childCode,
            signal: childSignal,
            error: `Unable to execute the command ${req.query.cmd} ${req.query.args}`,
          });
        } else if (childCode > 0) {
          return res.send({
            code: childCode,
            signal: childSignal,
            error: error,
          });
        } else {
          return res.send({
            code: childCode,
            signal: childSignal,
            result: result,
          });
        }
      });
    });

    this.app_.get('*', (_req, res) => {
      return res.send({
        error: '404',
      });
    });

    this.app_.listen(3000, () => {
      console.log(`Server is up on port ${port}`);
    });
  }
}
