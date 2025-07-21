import Pessoa from "./poojs.js";

const pedro = new Pessoa(85, 1.80)
console.log(pedro)
console.log("IMC: ",pedro.imc().toFixed(2))
