/**
 * Tipo de dato para distinguir las eficacias a la hora de la pelea
 * entre distintos luchadores de varios Universos
 */
export type efecto = 'Eficaz' | 'No Eficaz' | 'Normal';

export abstract class Fighter {
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: string,
    protected salud: number, protected ataque: number,
    protected defensa: number, protected velocidad: number,
    protected universo: string, protected frase?: string) {}
  /**
   * @returns Nombre del luchador
  */
  getNombre() {
    return this.nombre;
  }
  /**
    * @returns Altura del luchador
   */
  getAltura() {
    return this.altura;
  }
  /**
   * @returns Peso del luchador
  */
  getPeso() {
    return this.peso;
  }
  /**
   * @returns Tipo del luchador
   */
  getTipoluchador() {
    return this.tipo;
  }
  /**
  * @returns salud del luchador
  */
  getSalud() {
    return this.salud;
  }
  /**
   * @returns Ataque del luchador
   */
  getAtaque() {
    return this.ataque;
  }
  /**
   * @returns Defensa del luchador
   */
  getDefensa() {
    return this.defensa;
  }
  /**
   * @returns Velocidad del luchador
   */
  getVelocidad() {
    return this.velocidad;
  }
  /**
   * @returns Universo del luchador
   */
  getUniverso() {
    return this.universo;
  }
  /**
   * @returns Frase (en caso de que tenga) del jugador
   */
  getFrase() {
    return this.frase;
  }
  /**
   * @param valor La salud maxima del jugador
   */
  setSalud(valor: number) {
    this.salud = valor;
  }
  /**
   * @param luchador la efectividad del ataque de cualquier luchador
   */
  abstract getEfecto(luchador: any): efecto;
}
