 export class Impuesto {
    //Declaro los "atributos" de la clase impuestos
    #montoBrutoAnual;
    #deducciones;
  
    constructor(montoBrutoAnual, deducciones) {
      this.montoBrutoAnual = montoBrutoAnual;
      this.deducciones = deducciones;
    }
  
    /* GETTERS */
    get montoBrutoAnual() {
      // devuelve el verdadero dato protegido que hace referencia
      return this.#montoBrutoAnual;
    }
    /* SETTERS */
    set montoBrutoAnual(newValue) {
      this.#montoBrutoAnual = newValue;
    }
    /* GETTERS */
    get deducciones() {
      // devuelve el verdadero dato protegido que hace referencia
      return this.#deducciones;
    }
    /* SETTERS */
    set deducciones(newValue) {
      this.#deducciones = newValue;
    }
  }
  