/**
 * Clase Documentales
 * @param nombre de documentales
 * @param autor de documentales
 * @param actor de documentales
 * @param genero de documentales
 * @param año de documentales
 */
export class Documentales {
  constructor(protected nombre: string, protected autor: string,
    protected actor: string[] = [], protected genero: string[] = [],
    protected año: number) {}
  /**
    * @returns nombre de documentales
  */
  public getNombre() {
    return this.nombre;
  }
  /**
    * @returns autor de documentales
    */
  public getAutor() {
    return this.autor;
  }
  /**
    * @returns actor de película
    */
  public getActores() {
    for (let i: number = 0; i < this.actor.length; i++) {
      return this.actor;
    }
    return -1;
  }
  /**
    * @returns genero de documentales
  */
  public getGenero() {
    for (let i: number = 0; i < this.genero.length; i++) {
      return this.genero;
    }
    return -1;
  }
  /**
    * @returns año de documentales
  */
  public getAño() {
    return this.año;
  }
}
