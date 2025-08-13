const calculadora = require('./criamodulos');

function multiplica(a,b){
    let multi = a * b;
    return multi;
}

function divisao(a,b){
    let divisao = a/b
    return divisao
}

function linha(n)
{
    console.log("-".repeat(n))
}

module.exports = {multiplica, divisao}
