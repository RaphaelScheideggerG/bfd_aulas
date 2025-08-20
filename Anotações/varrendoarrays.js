const utils = require('../bib/novomodulo.js') 


const frutas = ['maça', 'banana', 'tomate', 'uva', 'melancia']

utils.linha(40);
console.log("TESTE 1: FOR VAR IN ARRAY\n"); // Moderno funciona bem para arrays
for (let fruta of frutas)
{
    console.log("Fruta: ", fruta)
}

utils.linha(40);
console.log(frutas.length);

console.log("TESTE 2: loop for\n");
for (i=0; i<frutas.length; i++)
{
    console.log(`Fruta: ${frutas[i]}`);
}

// DESAFIO: FAZER OUTROS LOOPS USAPESSOAS ADAPTAR PARA "USAPF", PEGAR O MATERIAL ANTERIOR (RELACIONAMENTOS 1-1, 1-N E N-N), IMPLEMENTAR O RESTANTE DAS CLASSES (TITULO) E NO ARQUIVO USAPF, MOSTRAR O CONTEUDO DOS OBJETOS INDIBIDUALMENTE COM O FOR ... OF 