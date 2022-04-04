import {BasicStreamableCollection} from "./basicstreamablecollection";
import {Series} from "./series";
/**
 * @param videos series
 */
export class SeriesColeccion extends BasicStreamableCollection<Series> {
  constructor(protected videos: Series[]) {
    super(videos);
  }
  /**
    * @param nombre de serie
    * @returns la serie
  */
  public getNombreVideo(nombre: string) {
    const exito: Series []= [];
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
    * @param año de serie
    * @returns la serie
  */
  public getAñoVideo(año: number) {
    const exito: Series []= [];
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
    * @param autor de serie
    * @returns la serie
  */
  public getAutorVideo(autor: string) {
    const exito: Series []= [];
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
