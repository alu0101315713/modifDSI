/**
 * @interface Streamable<T> genérica del tipo de vídeos de la plataforma
 * @method añadirVideo() añade vídeos
 * @method getNombreVideo() busca el vídeo por nombre
 * @method getAñoVideo() busca el vídeo por año
 * @method getAutorVideo() busca el vídeo por autor
 * @method getCantidadVideos() busca el vídeo por colección
 */
export interface Streamable<T>{
    añadirVideo(video: T): void;
    getNombreVideo(nombre: string): T[] | void;
    getAñoVideo(anio: number): T[] | void;
    getAutorVideo(autor: string): T[] | void;
    getCantidadVideos(): number;
}
