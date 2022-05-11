import {spawn} from 'child_process';
import {ResponseType} from './type';

export const execmdSpawn = (cmd: string, args: string, cb: (err: string | undefined,
    res: ResponseType | undefined) => void) => {
  const commanData = spawn(cmd, [args]);
  let result: string = '';

  commanData.on('error', (err) => {
    cb(err.message, undefined);
  });

  commanData.on('data', (data) => {
    result = data.toString();
  });

  const response: ResponseType = {
    resolve: result,
  };

  cb(undefined, response);
};
