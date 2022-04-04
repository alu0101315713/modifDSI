import {Fighter, efecto} from './fighter';

export type poder = 'Lado oscuro' | 'Jedi';
/**
  * Clase StarWars
*/
export class StarWars extends Fighter {
  /**
  * Constructor de la clase Star Wars
  * @param nombre nombre del luchador de Star Wars
  * @param peso peso del luchador de Star Wars
  * @param altura altura del luchador de Star Wars
  * @param peso peso del luchador de Star Wars
  * @param tipo tipo del luchador de Star Wars
  * @param salud salud del luchador de Star Wars
  * @param ataque ataque del luchador de Star Wars
  * @param defensa defensa del luchador de Star Wars
  * @param velocidad velocidad del luchador de Star Wars
  * @param frase frase que dice el luchador de Star Wars
  */
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: poder, protected salud: number,
    protected ataque: number, protected defensa: number,
    protected velocidad: number, frase?: string) {
    super(nombre, altura, peso, 'La Fuerza', salud, ataque, defensa, velocidad, 'Star Wars', frase);
  }
  getEfecto(luchador: StarWars): efecto {
    return 'Normal';
  }
}
