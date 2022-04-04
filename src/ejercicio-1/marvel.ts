import {Fighter, efecto} from './fighter';
/**
 * Tipo de dato para distinguir luchadores del Universo Marvel
 */
export type poder = 'Destructor';
export class Marvel extends Fighter {
  /**
  * Constructor de la clase Marvel
  * @param nombre nombre del luchador de Marvel
  * @param peso peso del luchador de Marvel
  * @param altura altura del luchador de Marvel
  * @param peso peso del luchador de Marvel
  * @param tipo tipo del luchador de Marvel
  * @param salud salud del luchador de Marvel
  * @param ataque ataque del luchador de Marvel
  * @param defensa defensa del luchador de Marvel
  * @param velocidad velocidad del luchador de Marvel
  * @param frase frase que dice el luchador de Marvel
  */
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: poder, protected salud: number,
    protected ataque: number, protected defensa: number,
    protected velocidad: number, frase?: string) {
    super(nombre, altura, peso, 'Guerrero', salud, ataque, defensa, velocidad,
        'Marvel', frase);
  }
  /**
   *
   * @param luchador El luchador hará ataques eficaces
   * @returns
   */
  getEfecto(luchador: Marvel): efecto {
    return 'Eficaz';
  }
}
