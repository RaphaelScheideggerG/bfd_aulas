function soma(a,b)
    {
        let soma = a + b;
        return soma;
    }

function subtracao(a,b)
    {
        return (a - b); // evita criar variáveis desnecessárias e economizar memoria em grande projetos
    }

/*
export {subtração}
export {soma}
*/

module.exports = {soma, subtracao}
