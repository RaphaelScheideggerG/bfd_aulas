// Importa as classes necessárias
import Aluno from './pessoas/Aluno.js';            // Importa a classe Aluno
import AlunoDAO from './pessoas/DAOs/AlunoDAO.mjs';      // Importa o DAO para Aluno
import Endereco from './pessoas/Endereco.js';      // Importa a classe Endereco
import Telefone from './pessoas/Telefone.js';      // Importa a classe Telefone
import Titulo from './pessoas/Titulo.js';          // Importa a classe Titulo

// ========== Criação do objeto Aluno ==========

const aluno = new Aluno();                  // Cria instância de Aluno
aluno.setNome("Maria da Silva");            // Define o nome
aluno.setEmail("maria.silva@aluno.ifb.edu.br"); // Define o e-mail
aluno.setCPF("123.456.789-00");             // Define o CPF
aluno.setMatricula("20230101");             // Define a matrícula
aluno.setCurso("Engenharia de Software");   // Define o curso

// ========== Endereço ==========

const end = new Endereco();                 // Cria objeto endereço
end.setLogradouro("Quadra 20 Conjunto A");  // Define logradouro
end.setCep("71234-567");                    // Define CEP
aluno.setEndereco(end);                     // Associa endereço ao aluno

// ========== Telefones ==========

const fone = new Telefone();                // Cria objeto telefone
fone.setDdd("61");                          // Define DDD
fone.setNumero("98888-7777");               // Define número
aluno.addTelefone(fone);                    // Adiciona telefone ao array do aluno

const fone2 = new Telefone();               // Cria segundo objeto telefone
fone2.setDdd("61");                         // Define DDD
fone2.setNumero("99999-0000");              // Define número
aluno.addTelefone(fone2);                   // Adiciona o segundo telefone

// ========== Título de Eleitor ==========

const titulo = new Titulo();                // Cria objeto Título
titulo.setNumero('123456789');              // Define o número
titulo.setZona('12');                       // Define a zona
titulo.setSecao('345');                     // Define a seção
aluno.setTitulo(titulo);                    // Associa o título ao aluno

// ========== DAO: Serialização, Salvamento e Leitura ==========

const alunoDAO = new AlunoDAO(aluno);       // Cria DAO passando o objeto Aluno

var jsonAluno = alunoDAO.toJSON();          // Gera o JSON do objeto
alunoDAO.saveJSON();                        // Salva no "localStorage" simulado

console.log("Objeto JSON gerado:");
console.log(jsonAluno);                     // Exibe o objeto JSON diretamente

console.log("\nString JSON salva:");
console.log(JSON.stringify(jsonAluno));     // Exibe o objeto convertido em string JSON

console.log("\nDados recuperados do localStorage:");
console.log(alunoDAO.recoveryJSON());       // Exibe os dados recuperados do "banco"
