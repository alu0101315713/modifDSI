import {Streamable} from "./streamable";
/**
 * @param videos: Array de vídeos
*/
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected videos: T[]) {}
  /**
    * Añade video
    * @param video
  */
  public añadirVideo(video: T): void {
    for (let i: number = 0; i < this.videos.length; i++) {
      this.videos.push(video);
    }
  }
  /**
    * Número de vídeos
    * @returns número
  */
  public getCantidadVideos() {
    return this.videos.length;
  }
  /**
    * Obtener vídeo por nombre
    * @param nombre nombre del video
  */
  abstract getNombreVideo(nombre: string): T[] | void;
  /**
    * Obtener vídeo por año
    * @param año del video
  */
  abstract getAñoVideo(año: number): T[] | void;
  /**
    * Obtener vídeo por autor
    * @param autor
  */
  abstract getAutorVideo(autor: string): T[] | void;
}
