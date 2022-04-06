import 'mocha';
import {expect} from 'chai';
import {Subscriptor} from '../../src/modif06_04/subscriptor';
import {Revista} from '../../src/modif06_04/revista';

const novedad = new Revista(99, 'novedad');
const sub1 = new Subscriptor(0, 'Antonio');
const sub2 = new Subscriptor(1, 'Samuel');
novedad.subscribe(sub2);

describe('Clase Subscriptor', () => {
  it('Debería de poderse crear subscriptores', () => {
    expect(sub1).to.be.an.instanceof(Subscriptor);
  });
  it('Debería de poderse ver el id del subscriptor', () => {
    expect(sub1.getId()).to.be.eq(0);
    expect(sub2.getId()).to.be.eq(1);
  });
  it('Debería de poderse ver el nombre del subscriptor', () => {
    expect(sub1.getName()).to.be.eq('Antonio');
    expect(sub2.getName()).to.be.eq('Samuel');
  });
  it('Debería de poderse suscribirse', () => {
    expect(sub1.subscribe).to.be.a('function');
  });
  it('Debería de poderse desuscribirse', () => {
    expect(sub1.unsubscribe).to.be.a('function');
  });
  it('Debería de poderse notificar', () => {
    expect(sub1.notify).to.be.a('function');
  });
});
