/* eslint-disable new-cap */
import {MongooseOperations} from './mongooseOperations';
import {user} from './models/userModel';

const Felipe = new user({
  name: 'Felipe',
  surnames: 'Gómez Fuentes',
  age: 21,
  email: 'felipegfu01@gmail.com',
  password: 'abcA$45op',
});

const Pepe = new user({
  name: 'Pepe',
  surnames: 'Gómez Fuentes',
  age: 32,
  email: 'pepegfu01@gmail.com',
  password: 'abcA$45op',
});

const PepeMod = new user({
  name: 'Pepe',
  surnames: 'Gómez Fuentes',
  age: 32,
  email: 'Pepejuani@gmail.com',
  password: 'abcA$45op',
});

const newOBJ = new MongooseOperations();

newOBJ.addOperation(Felipe);
newOBJ.addOperation(Pepe);
// newOBJ.deleteOperation(Samuel);
// newOBJ.deleteOperation(Pepe);
newOBJ.patchOperation(PepeMod);
// newOBJ.searchOperation(Samuel);
