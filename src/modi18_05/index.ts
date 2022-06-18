import {MongooseOperations} from './mongooseOperations';
import {UserModel} from './models/userModel';

const Felipe = new UserModel({
  name: 'Felipe',
  surnames: 'Gómez Fuentes',
  dni: '12345678A',
  age: 21,
  sport: 'Futbol',
  expert: 'Futbol',
  record: 10,
  email: 'felipegfu01@gmail.com',
});

const Pepe = new UserModel({
  name: 'Pepe',
  surnames: 'Gómez Fuentes',
  dni: '12345678A',
  age: 32,
  sport: 'Futbol',
  expert: 'Futbol',
  record: 10,
  email: 'pepegfu01@gmail.com',
});

const newOBJ = new MongooseOperations();

newOBJ.addOperation(Felipe);
newOBJ.addOperation(Pepe);
// newOBJ.deleteOperation(Felipe);
// newOBJ.deleteOperation(Pepe);
// newOBJ.patchOperation(PepeMod);
// newOBJ.searchOperation(Felipe);
