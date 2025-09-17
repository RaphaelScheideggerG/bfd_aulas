const utils = require("../bib/novomodulo")

utils.linha(40);
console.log("TESTE 1: loop for\n"); // UTIL PARA QUANDO SE TEM UM INTERVALO CLARO DEFINIDO
for (x=10; x>0; x--)
{
    console.log( Math.abs(x - 10))
}
console.log("break")

utils.linha(40);

console.log("TESTE 2: loopo while\n"); // Util para quando não se tem um intervalo claro e definido
var i = 0;
while (true)
{    
    console.log("TRUE");
    if (i >= 9)
    {
        console.log(i);
        console.log("FALSE");
        console.log("break");
        break;
    } else {console.log(i); i++}
}

utils.linha(40);

var y = 0
console.log("TESTE 3: loop do while\n"); // Executa uma vez e depois testa
do {console.log(y); y++} while(y<5);
console.log(y);
