import * as express from 'express';
import {join} from 'path';
import {execmdSpawn} from './commands';

const app = express();
console.log(__dirname);

app.use(express.static(join(__dirname, '../public')));
app.get('/', (_, res) => {
  res.send('<h1>My application</h1>');
});

app.get('/execmd', (req, res) => {
  console.log(req.query);
  if (!req.query.command) {
    res.send({
      error: 'A title has to be provided',
    });
  } else {
    execmdSpawn(req.query.command as string, req.query.param as string, (err, data) => {
      if (err) {
        res.send('<h1>ERROR</h1>');
      } else {
        res.send(data?.resolve);
      }
    });
  }
});

app.get('*', (_, res) => {
  res.send('<h1>404</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
