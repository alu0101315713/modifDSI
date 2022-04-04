import {Fighter, efecto} from "./fighter";
/**
 * Pone en combate a dos luchadores
 */
export class Combate<T extends Fighter, U extends Fighter> {
  /**
   * @param luchador1 Primer luchador a combatir
   * @param luchador2 Segundo luchador a combatir
  */
  constructor(private luchador1: T, private luchador2: U) {
  }
  private superefecto(luchador1: (T | U), luchador2: (T | U)): efecto {
    let ventaja: efecto = 'Normal';

    if (luchador1.getUniverso() == luchador2.getUniverso()) {
      ventaja = luchador1.getEfecto(luchador2);
    } else {
      switch (luchador1.getTipoluchador()) {
        case 'PokeFuerza':
          if (luchador2.getTipoluchador() === 'Guerrero') {
            ventaja = 'Eficaz';
          } else if (luchador2.getTipoluchador() === 'La Fuerza') {
            ventaja = 'No Eficaz';
          } else {
            ventaja = 'Normal';
          }
          break;

        case 'Guerrero':
          if (luchador2.getTipoluchador() === 'La Fuerza') {
            ventaja = 'Eficaz';
          } else if (luchador2.getTipoluchador() === 'PokeFuerza') {
            ventaja = 'No Eficaz';
          } else {
            ventaja = 'Normal';
          }
          break;

        case 'La Fuerza':
          if (luchador2.getTipoluchador() === 'PokeFuerza') {
            ventaja = 'Eficaz';
          } else if (luchador2.getTipoluchador() === 'Guerrero') {
            ventaja = 'No Eficaz';
          } else {
            ventaja = 'Normal';
          }
          break;
      }
    }
    return ventaja;
  }

  dañoCalculator(luchador1: (T| U), luchador2: (T| U)): number {
    let efectividad = 1;
    const daño: number = 50 * (luchador1.getAtaque() / luchador2.getDefensa()) * efectividad;
    const ventaja = this.superefecto(luchador1, luchador2);
    if (ventaja === 'Normal') {
      efectividad = 1;
    } else if (ventaja === 'Eficaz') {
      efectividad = 2;
    } else if (ventaja === 'No Eficaz') {
      efectividad = 0.5;
    }
    const dañototal = daño * efectividad;
    console.log(`¡${luchador1.getNombre()} hizo ${dañototal} de daño a ${luchador2.getNombre()}!`);
    return dañototal;
  }
  /**
   * @returns El luchador ganador de la pelea
  */
  batalla():string {
    let atacante: (T| U) = this.luchador1;
    let defensor: (T| U) = this.luchador2;
    let ganador: string;

    console.log(`${defensor.getNombre()} VS ${atacante.getNombre()}!`);
    console.log(`${atacante.getNombre()} tiene ${atacante.getSalud()} HP`);
    console.log(`${defensor.getNombre()} tiene ${defensor.getSalud()} HP`);

    while (true) {
      console.log('----------------------------------------------------------------\n');
      console.log(`¡${atacante.getNombre()} va a atacar!`);
      console.log(`${atacante.getFrase()}`);
      const daño = this.dañoCalculator(atacante, defensor);
      defensor.setSalud(defensor.getSalud() - daño);
      console.log(`¡A ${defensor.getNombre()} le queda ${defensor.getSalud()} puntos de vida!`);

      if (defensor.getSalud() <= 0) {
        console.log(`${defensor.getNombre()} no puede seguir luchando, ¡${atacante.getNombre()} es el ganador!`);
        ganador = atacante.getNombre();
        console.log('----------------------------------------------------------------\n');
        break;
      } else {
        const aux: (T | U) = defensor;
        defensor = atacante;
        atacante = aux;
        console.log('----------------------------------------------------------------\n');
      }
    }
    return ganador;
  }
}
