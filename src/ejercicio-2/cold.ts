import {BasicStreamableCollection} from "./basicstreamablecollection";
import {Documentales} from "./doc";
/**
 * @param videos documentales
 */
export class DocColeccion extends BasicStreamableCollection<Documentales> {
  constructor(protected videos: Documentales[]) {
    super(videos);
  }
  /**
    * @param nombre de doc
    * @returns la doc
  */
  public getNombreVideo(nombre: string) {
    const exito: Documentales []= [];
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
    * @param año de doc
    * @returns la doc
  */
  public getAñoVideo(año: number) {
    const exito: Documentales []= [];
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
    * @param autor de doc
    * @returns la doc
  */
  public getAutorVideo(autor: string) {
    const exito: Documentales []= [];
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
