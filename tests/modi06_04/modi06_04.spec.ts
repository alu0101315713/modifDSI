// import {Revista} from '../../src/modif06_04/revista';
// import {Observer} from '../../src/modif06_04/revista';
// import {Observable} from '../../src/modif06_04/revista';
// import {ButtonClickEventType} from '../../src/modif06_04/revista';
// import {Subscriptor} from '../../src/modif06_04/subscriptor';
// import 'mocha';
// import {expect} from 'chai';
// import { describe, it } from 'mocha';

// // Client code
// const revista1 = new Revista(0, 'revista1');
// const firstButtonObserver = new Subscriptor(0, 'firstButtonObserver');
// const secondButtonObserver = new Subscriptor(1, 'secondButtonObserver');
// const novedad = new Revista(0, 'novedad');

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

// describe('Revista', () => {
