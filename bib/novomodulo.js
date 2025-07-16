const calculadora = require('../bib/criamodulos');

function multiplica(a,b){
    let multi = a * b;
    return multi;
}

function divisao(a,b){
    let divisao = a/b
    return divisao
}

module.exports = {multiplica, divisao, calculadora, subtracao }