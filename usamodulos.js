/*
import { soma } from './criamodulos';
import { subtracao } from './criamodulos';
*/

const calculadora = require('./bib/criamodulos.js');
var x = 10, y = 10;
console.log("x=", x, "y=", y)
console.log("soma: ", calculadora.soma(x,y));
console.log("subtração:", calculadora.subtracao(x,y));
console.log("multiplicação:", calculadora.multiplica(x,y));
console.log("divisão:", calculadora.divisao(x,y));
