import {Fighter, efecto} from './fighter';
/**
 * Tipo de dato para distinguir luchadores del Universo Drangon Ball
 */
export type poder = 'Poderoso';
/**
  * Clase DragonBall
*/
export class DragonBall extends Fighter {
  /**
  * Constructor de la clase Dragon Ball
  * @param nombre nombre del luchador de Dragon Ball
  * @param peso peso del luchador de Dragon Ball
  * @param altura altura del luchador de Dragon Ball
  * @param peso peso del luchador de Dragon Ball
  * @param tipo tipo del luchador de Dragon Ball
  * @param salud salud del luchador de Dragon Ball
  * @param ataque ataque del luchador de Dragon Ball
  * @param defensa defensa del luchador de Dragon Ball
  * @param velocidad velocidad del luchador de Dragon Ball
  * @param frase frase que dice el luchador de Dragon Ball
  */
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: poder, protected salud: number,
    protected ataque: number, protected defensa: number,
    protected velocidad: number, frase?: string) {
    super(nombre, altura, peso, 'Magia', salud, ataque, defensa, velocidad,
        'Dragon Ball', frase);
  }
  /**
   * @param luchador El luchador hará ataques eficaces
   * @returns
   */
  getEfecto(luchador: DragonBall): efecto {
    return 'Eficaz';
  }
}
