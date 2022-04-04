/**
 * Clase Peliculas
 * @param nombre de pelicula
 * @param autor de pelicula
 * @param actor de pelicula
 * @param genero de pelicula
 * @param año de publicación
 */
export class Peliculas {
  constructor(protected nombre: string, protected autor: string,
    protected actor: string[] = [], protected genero: string[] = [],
    protected año: number) {}
  /**
    * @returns nombre de pelicula
    */
  public getNombre() {
    return this.nombre;
  }
  /**
    * @returns autor de pelicula
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
    * @returns genero de pelicula
  */
  public getGenero() {
    for (let i: number = 0; i < this.genero.length; i++) {
      return this.genero;
    }
    return -1;
  }
  /**
    * @returns año de pelicula
    */
  public getAño() {
    return this.año;
  }
}
