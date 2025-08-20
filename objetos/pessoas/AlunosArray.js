const Aluno = require("./Aluno.js")
const utils = require("../../bib/novomodulo.js")


rafael = new Aluno()
rafael.setCurso("AUTOMAÇÃO")
rafael.setMatricula("20349530945")
rafael.setNome("Rafael")
rafael.setCPF("06544381238")

mateus = new Aluno()
mateus.setCurso("ADS")
mateus.setMatricula("234564912445")
mateus.setNome("Mateus")
mateus.setCPF("205933960294")

janete = new Aluno()
janete.setCurso("CIENCIA DA COMPUTAÇÂO")
janete.setMatricula("20050494543")
janete.setNome("Janete")
janete.setCPF("95694303469")

let alunos = []
alunos.push(rafael); alunos.push(mateus); alunos.push(janete)
console.log(alunos)

utils.linha(50)

function showall()
{
    for (i=0; i<alunos.length; i++)
    {
        console.log("Nome: ", alunos[i].getNome()); 
        console.log("Matrícula:", alunos[i].getMatricula()); 
        console.log("Curso:", alunos[i].getCurso()); 
        console.log("CPF:", alunos[i].getCPF());
        utils.linha(50);
    }
}

function showone(i)
{
    console.log("Nome: ", alunos[i].getNome()); 
    console.log("Matrícula:", alunos[i].getMatricula()); 
    console.log("Curso:", alunos[i].getCurso()); 
    console.log("CPF:", alunos[i].getCPF());
    utils.linha(50);
}

showone(2);
showall();
