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
  });
  it('Debería de poderse ver el nombre del subscriptor', () => {
    expect(sub1.getName()).to.be.eq('Antonio');
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
