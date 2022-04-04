export class Pokedex<T> {
  /**
   * Memoria de la Pokedex
   */
  public datos: T[] = [];

  constructor() {}
  /**
   * Guarda a luchadores de varios Universos en la memoria
   * @param luchadores Luchadores listados
   */
  guardar(...luchadores: T[]) {
    luchadores.forEach((entrada) => {
      this.datos.push(entrada);
    });
  }
  /**
   * Elimina a luchadores de varios Universos en la memoria
   * @param luchadores Luchadores listados
   */
  eliminar(...luchadores: T[]): void {
    let contador = 0;
    luchadores.forEach((luchador) => {
      contador = 0;
      this.datos.forEach((luchadoresguardados) => {
        contador++;
        if (luchador === luchadoresguardados) {
          this.datos.splice(contador, 1);
        }
      });
    });
  }
}
