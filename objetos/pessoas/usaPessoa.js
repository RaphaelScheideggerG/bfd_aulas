//import Pessoa from "./objetos/Pessoa.js";
const Pessoa = require('./Pessoa.js')

const pedro = new Pessoa("pedro", 85, 1.80);
console.log(pedro);
//console.log("IMC: ",pedro.imc().toFixed(2));
console.log(pedro.imc); // Não mostra o valor pois a função não foi chamada e imc não foi definido

const maria = new Pessoa();
maria.nome = "maria";
maria.altura = 1.67;
maria.peso = 57;
console.log(maria);