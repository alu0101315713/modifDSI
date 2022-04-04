/**
 * Clase Series
 * @param nombre de serie
 * @param autor de serie
 * @param actor de serie
 * @param genero de serie
 * @param año de publicación
 */
export class Series {
  constructor(protected nombre: string, protected autor: string,
    protected actor: string[] = [], protected genero: string[] = [],
    protected año: number) {}
  /**
    * @returns nombre de serie
  */
  public getNombre() {
    return this.nombre;
  }
  /**
    * @returns autor de serie
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
    * @returns genero de serie
  */
  public getGenero() {
    for (let i: number = 0; i < this.genero.length; i++) {
      return this.genero;
    }
    return -1;
  }
  /**
    * @returns año de serie
  */
  public getAño() {
    return this.año;
  }
}
