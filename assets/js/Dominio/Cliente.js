export class Cliente {
  // Declaro los "Atributos" de la clase cliente
  #nombre;
  #impuesto;

  constructor(nombre, impuesto) {
      this.#nombre = nombre; // llegara por parametro
      this.#impuesto = impuesto;
  }

  /* GETTERS */
  get nombre() {
      // devuelve el verdadero dato protegido que hace referencia
      return this.#nombre;
  }

  /* SETTERS */
  set nombre(newValue) {
      this.#nombre = newValue;
  }

  /* GETTERS */
  get impuesto() {
      // devuelve el verdadero dato protegido que hace referencia
      return this.#impuesto;
  }

  /* SETTERS */
  set impuesto(newValue) {
      this.#impuesto = newValue;
  }

  calcularImpuesto() {
      return (this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * 0.21;
  }
}
