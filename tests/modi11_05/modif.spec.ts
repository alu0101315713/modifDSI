import 'mocha';
// import {expect} from 'chai';
import {Server} from '../../src/modi11_05/aaa';

describe('Server', () => {
  it('should start', () => {
    const server = new Server();
    server.start();
  });
});

