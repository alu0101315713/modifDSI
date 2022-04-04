import {BasicStreamableCollection} from "./basicstreamablecollection";
import {Peliculas} from "./pelis";
/**
 * @param videos peliculas
 */
export class PelisColeccion extends BasicStreamableCollection<Peliculas> {
  constructor(protected videos: Peliculas[]) {
    super(videos);
  }
  /**
    * @param nombre de peliculas
    * @returns la peliculas
  */
  public getNombreVideo(nombre: string) {
    const exito: Peliculas []= [];
    for (let i = 0; i < this.videos.length; i++) {
      if (this.videos[i].getNombre() == nombre) {
        exito.push(this.videos[i]);
      } else {
        return console.log('No existe');
      }
    }
    return exito;
  }
  /**
    * @param año de peliculas
    * @returns la peliculas
  */
  public getAñoVideo(año: number) {
    const exito: Peliculas []= [];
    for (let i = 0; i < this.videos.length; i++) {
      if (this.videos[i].getAño() == año) {
        exito.push(this.videos[i]);
      } else {
        return console.log('No existe');
      }
    }
    return exito;
  }
  /**
    * @param autor de peliculas
    * @returns la peliculas
  */
  public getAutorVideo(autor: string) {
    const exito: Peliculas []= [];
    for (let i = 0; i < this.videos.length; i++) {
      if (this.videos[i].getAutor() == autor) {
        exito.push(this.videos[i]);
      } else {
        return console.log('No existe');
      }
    }
    return exito;
  }
}
