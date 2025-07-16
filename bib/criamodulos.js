function soma(a,b)
    {
        let soma = a + b;
        return soma;
    }

function subtracao(a,b)
    {
        return (a - b); // evita criar variáveis desnecessárias e economizar memoria em grande projetos
    }

function multiplica(a,b){
    let multi = a * b;
    return multi;
}

function divisao(a,b){
    let divisao = a/b
    return divisao
}
/*
export {subtração}
export {soma}
*/

module.exports = {soma, subtracao, divisao, multiplica}
