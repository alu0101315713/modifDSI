import {Revista} from '../../src/modif06_04/revista';
import 'mocha';
import {expect} from 'chai';

const revista1 = new Revista(0, 'revista1');
// const firstButtonObserver = new Subscriptor(0, 'firstButtonObserver');
// const secondButtonObserver = new Subscriptor(1, 'secondButtonObserver');
const novedad = new Revista(99, 'novedad');

// console.log('Primer subscriptor');
// revista1.subscribe(firstButtonObserver);

// console.log('Segundo subscriptor');
// revista1.subscribe(secondButtonObserver);

// try {
//   revista1.subscribe(secondButtonObserver);
// } catch (error) {
//   console.log('Ya estaba suscrito');
// }

// console.log('revista1 left click');
// revista1.onLeftClick();

// console.log('firstButtonObserver unsubscription');
// revista1.unsubscribe(firstButtonObserver);

// console.log('revista1 right click');
// revista1.onRightClick();
// console.log('revista1 center click');
// revista1.onCenterClick();

// console.log('Nueva revista!');
// novedad.subscribe(firstButtonObserver);
// novedad.nuevaRevista();

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
