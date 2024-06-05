import { Cliente } from "./Dominio/Cliente.js";
import { Impuesto } from "./Dominio/Impuesto.js";

const imp1 = new Impuesto (1100, 100);
const cli1 = new Cliente ("Alexandra", imp1);
 
console.log(cli1.calcularImpuesto());