/**
 * @param clave clave que cifrará el mensaje
 */
export class Clave {
  constructor(protected clave: string) {}
  /**
    * @returns clave que cifrará el mensaje
  */
  public getClave() {
    return this.clave;
  }
  /**
    * @returns el tamaño de la clave
  */
  public getTamañoClave() {
    return this.clave.length;
  }
  /**
    * @returns caracteres
  */
  public getCarac(index: number) {
    return this.clave.charAt(index);
  }
}
