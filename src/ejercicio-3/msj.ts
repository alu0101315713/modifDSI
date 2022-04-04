/**
 * Clase que creará el mensaje a cifrar
 */
export class Mensaje {
  /**
    * @param msj generado por la clase
  */
  constructor(protected msj: string) {}
  /**
    * @returns mensaje que se cree
  */
  public getMensaje() {
    return this.msj;
  }
  /**
    * @returns el tamaño del mensaje
  */
  public getTamañoMensaje() {
    return this.msj.length;
  }
  /**
    * @returns caracteres
  */
  public getCarac(index: number) {
    return this.msj.charAt(index);
  }
}
