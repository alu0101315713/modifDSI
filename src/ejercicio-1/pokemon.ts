import {Fighter, efecto} from "./fighter";
/**
 * Tipo de dato para distinguir luchadores del Universo Pokemon
 */
export type poke = 'fuego' | 'agua' | 'eléctrico' | 'hierba' | 'normal';
export class Pokemon extends Fighter {
  /**
 * @param nombre Nombre del Pokemon
 * @param altura Altura del Pokemon
 * @param peso Peso del Pokemon
 * @param tipo Tipo del Pokemon
 * @param salud Salud (maxima) del Pokemon
 * @param ataque Ataque del Pokemon
 * @param defensa Defensa del Pokemon
 * @param velocidad Velocidad del Pokemon
 */
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: poke, protected salud: number,
    protected ataque: number, protected defensa: number,
    protected velocidad: number, frase?: string) {
    super(nombre, altura, peso, 'PokeFuerza', salud, ataque, defensa, velocidad,
        'Pokemon', frase);
  }
  /**
 * Tipo del Pokemon
 */
  getTipo(): poke {
    return this.tipo;
  }
  /**
 * Muestra la información del Pokemon
  */
  pokeInformacion() {
    console.log('|------------------------');
    console.log('|Nombre:     ' + this.getNombre());
    console.log('|Altura:     ' + this.getAltura());
    console.log('|Peso:       ' + this.getPeso());
    console.log('|Tipo:       ' + this.getTipo());
    console.log('|Salud (HP): ' + this.getSalud());
    console.log('|Ataque:     ' + this.getAtaque());
    console.log('|Defensa:    ' + this.getDefensa());
    console.log('|Velocidad:  ' + this.getVelocidad());
    // console.log('-------------------------');
  }
  /**
   *
   * @param pokemon El Pokemon tendrá una eficacia según su tipo
   * @returns
   */
  getEfecto(pokemon: Pokemon): efecto {
    if (pokemon.getTipo() === this.tipo) {
      console.log('Has hecho daño neutral, daño:');
      return 'Normal';
    } else if (pokemon.getTipo() === 'fuego') {
      if (this.tipo === 'hierba') { // fuego > hierba
        console.log('Has hecho daño muy crítico! daño: ');
        return 'Eficaz';
      } else if (this.tipo === 'agua') { // fuego < agua
        console.log('Has hecho poco efectivo! daño:');
        return 'No Eficaz';
      } else if (this.getTipo() === 'eléctrico') { // fuego = eléctrico
        console.log('Has hecho daño neutral, daño:');
        return 'Normal';
      }
    } else if (pokemon.getTipo() === 'agua') {
      if (this.tipo === 'hierba') { // agua < hierba
        console.log('Has hecho poco efectivo! daño:');
        return 'No Eficaz';
      } else if (this.tipo === 'eléctrico') { // agua < eléctrico
        console.log('Has hecho poco efectivo! daño:');
        return 'No Eficaz';
      } else if (this.tipo === 'fuego') { // agua > fuego
        console.log('Has hecho daño muy crítico! daño:');
        return 'Eficaz';
      }
    } else if (pokemon.getTipo() === 'hierba') {
      if (this.tipo === 'eléctrico') { // hierba == eléctrico
        console.log('Has hecho daño neutral, daño:');
        return 'Normal';
      } else if (this.tipo === 'fuego') { // hierba < fuego
        console.log('Has hecho daño muy crítico! daño: ');
        return 'Eficaz';
      } else if (this.tipo === 'agua') { // hierba > agua
        console.log('Has hecho daño muy crítico! daño: ');
        return 'Eficaz';
      }
    } else if (pokemon.getTipo() === 'eléctrico') {
      if (this.tipo === 'fuego') { // eléctrico = fuego
        console.log('Has hecho daño neutral, daño:');
        return 'Normal';
      } else if (this.tipo === 'agua') { // eléctrico > agua
        console.log('Has hecho daño muy crítico! daño: ');
        return 'Eficaz';
      } else if (this.tipo === 'hierba') { // eléctrico = fuego
        console.log('Has hecho daño neutral, daño:');
        return 'Normal';
      }
    } else if (pokemon.getTipo() === 'normal') {
      return 'Normal';
    } else {
      return 'Normal';
    }
    return 'No Eficaz';
  }
}

/* const prueba: Pokemon = new Pokemon('Ursaring', 1.8, 125.8, 'normal', 90, 130, 75, 55);
console.log(prueba.pokeInformacion());*/
