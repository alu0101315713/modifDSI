import {Fighter, efecto} from './fighter';
/**
 * Tipo de dato para distinguir luchadores del Universo DC
 */
export type poder = 'Poderoso' | 'Agil';
export class DC extends Fighter {
  /**
  * Constructor de la clase DC Comics
  * @param nombre nombre del luchador de DC Comics
  * @param peso peso del luchador de DC Comics
  * @param altura altura del luchador de DC Comics
  * @param peso peso del luchador de DC Comics
  * @param tipo tipo del luchador de DC Comics
  * @param salud salud del luchador de DC Comics
  * @param ataque ataque del luchador de DC Comics
  * @param defensa defensa del luchador de DC Comics
  * @param velocidad velocidad del luchador de DC Comics
  * @param frase frase que dice el luchador de DC Comics
  */
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: poder, protected salud: number,
    protected ataque: number, protected defensa: number,
    protected velocidad: number, frase?: string) {
    super(nombre, altura, peso, 'Guerrero', salud, ataque, defensa, velocidad,
        'DC Comics', frase);
  }
  /**
   * @param luchador El luchador hará ataques sin efectos
   * @returns
   */
  getEfecto(luchador: DC): efecto {
    return 'Normal';
  }
}
