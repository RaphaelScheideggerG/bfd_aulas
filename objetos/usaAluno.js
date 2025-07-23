const Pessoa = require("./escola/Aluno.js");

const joao = new Pessoa();
joao.setMatricula(192764113);

//joao.#matricula = 192764113

/*
for (let i = 0; i < 5; i++)
{
    console.log(joao)
}
*/

for (i in joao)
{
    console.log(i, joao[i]);
}
console.log("Matricula João:", joao.getMatricula());
