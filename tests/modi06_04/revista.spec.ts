import {Revista} from '../../src/modif06_04/revista';
import 'mocha';
import {expect} from 'chai';

const revista1 = new Revista(0, 'revista1');
const novedad = new Revista(99, 'novedad');

describe('Clase Revista', () => {
  it('Debería de poderse crear revistas', () => {
    expect(revista1).to.be.an.instanceof(Revista);
  });
  it('Debería de poderse suscribir a revistas', () => {
    expect(revista1.subscribe).to.be.a('function');
  });
  it('Debería de poderse desuscribir a revistas', () => {
    expect(revista1.unsubscribe).to.be.a('function');
  });
  it('Debería de poderse notificar a revistas', () => {
    expect(revista1.notify).to.be.a('function');
  });
  it('Debería de poderse ver el nombre de la revista', () => {
    expect(novedad.getName()).to.be.eq('novedad');
  });
  it('Debería de poderse ver el id de la revista', () => {
    expect(novedad.getId()).to.be.eq(99);
  });
  it('Nueva revista', () => {
    expect(novedad.nuevaRevista).to.be.a('function');
  });
});
