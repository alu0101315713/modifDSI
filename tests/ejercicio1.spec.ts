import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejercicio-1/fighter';
import {Marvel} from '../src/ejercicio-1/marvel';
import {DC} from '../src/ejercicio-1/dc';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {StarWars} from '../src/ejercicio-1/star_wars';
import {DragonBall} from '../src/ejercicio-1/dragon_ball';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Combate} from '../src/ejercicio-1/combate';
describe('Tests de las clases hijas de Fighter', () => {
  const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'fuego', 73, 76, 75, 100, 'grrrr');
  const escarlata = new Marvel('bruja escarlata', 1.7, 60, 'Destructor', 90, 170, 150, 100, 'tú me lo arrebataste todo');
  const superman = new DC('Superman', 1.9, 90.5, 'Poderoso', 250, 150, 150, 80, 'Hay un bien y un mal en este universo, y esa distinción no es difícil de hacer');
  const babyjoda = new StarWars('Baby Joda', 0.48, 3, 'Jedi', 50, 60, 75, 70, 'Abandonarte la Fuerza no puede');
  const krilin = new DragonBall('Krilin', 1.7, 70, 'Poderoso', 90, 146, 80, 90, 'No sé quién demonios eres, pero te encontraré y me matarás');
  it('Clase Marvel', () => {
    // expect(new Marvel('bruja escarlata', 1.7, 60, 'Destructor', 90, 170, 150, 100, 'tú me lo arrebataste todo')).to.be.eq(true);
    expect(escarlata instanceof Fighter).to.be.true;
  });
  it('Clase DC', () => {
    // expect(new DC('Superman', 1.9, 90.5, 'Poderoso', 250, 150, 150, 80, 'Hay un bien y un mal en este universo, y esa distinción no es difícil de hacer')).to.be.eq(true);
    expect(superman instanceof Fighter).to.be.true;
  });
  it('Clase Pokemon', () => {
    // expect(new Pokemon('Ninetales', 1.1, 19.9, 'fuego', 73, 76, 75, 100, 'grrrr')).to.be.eq(true);
    expect(Ninetales instanceof Fighter).to.be.true;
  });
  it('Clase Star Wars', () => {
    // expect(new StarWars('Baby Joda', 1.7, 70, 'Jedi', 90, 146, 80, 90, 'No sé quién demonios eres, pero te encontraré y me matarás')).to.be.eq(true);
    expect(babyjoda instanceof Fighter).to.be.true;
  });
  it('Clase Dragon Ball', () => {
    // expect(new DragonBall('Krilin', 1.7, 70, 'Poderoso', 90, 146, 80, 90, 'No sé quién demonios eres, pero te encontraré y me matarás')).to.be.eq(true);
    expect(krilin instanceof Fighter).to.be.true;
  });
  it('Clase Pokedex', () => {
    const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'fuego', 73, 76, 75, 100, 'grrrr');
    const escarlata = new Marvel('bruja escarlata', 1.7, 60, 'Destructor', 90, 170, 150, 100, 'tú me lo arrebataste todo');
    const superman = new DC('Superman', 1.9, 90.5, 'Poderoso', 250, 150, 150, 80, 'Hay un bien y un mal en este universo, y esa distinción no es difícil de hacer');
    const babyjoda = new StarWars('Baby Joda', 0.48, 3, 'Jedi', 50, 60, 75, 70, 'Abandonarte la Fuerza no puede');
    const krilin = new DragonBall('Krilin', 1.7, 70, 'Poderoso', 90, 146, 80, 90, 'No sé quién demonios eres, pero te encontraré y me matarás');
    const pokedex = new Pokedex();
    describe('Funciones de la Pokemon', () => {
      it('Guardamos a luchadores de diferentes Universos en la Pokedex', () => {
        const basededatos = pokedex.guardar(Ninetales, babyjoda, krilin, escarlata, superman);
        expect(pokedex.guardar(Ninetales, babyjoda, krilin, escarlata, superman)).to.be.eq(basededatos);
      });
      it('Eliminamos a luchadores de diferentes Universos de la Pokedex', () => {
        const basededatos = pokedex.eliminar(babyjoda, superman);
        expect(pokedex.eliminar(babyjoda, superman)).to.be.eq(basededatos);
      });
    });
  });
  it('Clase Combate', () => {
    expect(new Combate(escarlata, superman));
  });
  it('Combates entre universos', () => {
    const combat1 = new Combate(escarlata, superman);
    const combat2 = new Combate(superman, Ninetales);
    const combat3 = new Combate(babyjoda, escarlata);
    const combat4 = new Combate(Ninetales, babyjoda);
    const combat5 = new Combate(escarlata, krilin);
    const combat6 = new Combate(krilin, babyjoda);
    expect(combat1.batalla()).to.be.equal('Superman');
    expect(combat2.batalla()).to.be.equal('Superman');
    expect(combat3.batalla()).to.be.equal('Baby Joda');
    expect(combat4.batalla()).to.be.equal('Ninetales');
    expect(combat5.batalla()).to.be.equal('bruja escarlata');
    expect(combat6.batalla()).to.be.equal('Krilin');
  });
});
