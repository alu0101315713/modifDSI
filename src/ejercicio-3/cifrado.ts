import {Clave} from "./clave";
import {Mensaje} from "./msj";
/**
 * @param mensaje que se va a tratar
 * @param clave con la que se encripta el mensaje
 */
export class CifradoCesar {
  constructor(protected mensaje: Mensaje, protected clave: Clave) {}
  /**
    * @returns mensaje
  */
  public getMensaje() {
    return this.mensaje;
  }
  /**
    * @returns clave
  */
  public getClave() {
    return this.clave;
  }
  /**
    * @param mensaje comprobamos tamaño
    * @param clave clave
    * @returns clave rpe
  */
  public generarClave(mensaje: Mensaje, clave: string) {
    for (let i: number = 0; i < mensaje.getTamañoMensaje(); i++) {
      if (mensaje.getTamañoMensaje() == i) {
        i = 0;
      }
      if (this.clave.getTamañoClave() == mensaje.getTamañoMensaje()) {
        break;
      }
      clave += this.clave.getCarac(i);
    }
    return clave;
  }
  /**
    * @param mensaje a encriptar
    * @param clave para encriptar
    * @returns mensaje encriptado
  */
  public encriptar(mensaje: string, clave: string): string {
    let result = "";
    let i = 0;
    for (const c of mensaje) {
      let code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        code = code + clave.charCodeAt(i) - 65;
        if (code > 90) {
          code = code - 26;
        }
        result += String.fromCharCode(code);
        i = (i + 1) % clave.length;
      } else {
        result += c;
      }
    }
    return result;
  }
  /**
    * @param mensajecripted a desencriptar
    * @param clave para desencriptar
    * @returns mensaje original
  */
  public desencriptar(mensajecripted: Mensaje, clave: Clave) {
    let msj: string = " ";
    let aux: number = 0;
    let auxmsj: number = 0;
    let auxclave: number = 0;
    for (let i: number = 0; i < mensajecripted.getTamañoMensaje() && i < clave.getTamañoClave(); i++) {
      const indice1 = mensajecripted.getCarac(i);
      const indice2 = this.generarClave(mensajecripted, clave.getCarac(i));
      auxmsj = parseInt(indice1);
      auxclave = parseInt(indice2);
      aux+= parseInt(((auxmsj - auxclave)+26) %26 + 'A');
      msj = String.fromCharCode(aux);
    }
    console.log('Mensaje original: '+ msj);
    return msj;
  }
}
