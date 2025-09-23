// Importa as classes necessárias
import PessoaFisica from './pessoas/PessoaFisica.js';    // Importa a classe PessoaFisica
import PFDAO from './pessoas/DAOs/PFDAO.mjs';          // Importa o DAO para PessoaFisica
import Endereco from './pessoas/Endereco.js';              // Importa a classe Endereco
import Telefone from './pessoas/Telefone.js';              // Importa a classe Telefone
import Titulo from './pessoas/Titulo.js';                  // Importa a classe Titulo

// ========== Criação do objeto PessoaFisica ==========

const pf = new PessoaFisica();                  // Cria instância de PessoaFisica
pf.setNome("João da Silva");                    // Define o nome
pf.setEmail("joao.silva@teste.com.br");         // Define o e-mail
pf.setCPF("987.654.321-00");                    // Define o CPF

// ========== Endereço ==========

const end = new Endereco();                     // Cria objeto endereço
end.setLogradouro("Rua das Flores, 123");       // Define logradouro
end.setCep("01234-567");                        // Define CEP
pf.setEndereco(end);                            // Associa endereço à pessoa física

// ========== Telefones ==========

const fone1 = new Telefone();                   // Cria objeto telefone
fone1.setDdd("11");                             // Define DDD
fone1.setNumero("98765-4321");                  // Define número
pf.addTelefone(fone1);                          // Adiciona telefone ao array da PF

const fone2 = new Telefone();                   // Cria segundo objeto telefone
fone2.setDdd("21");                             // Define DDD
fone2.setNumero("91234-5678");                  // Define número
pf.addTelefone(fone2);                          // Adiciona o segundo telefone

// ========== Título de Eleitor ==========

const titulo = new Titulo();                    // Cria objeto Título
titulo.setNumero('987654321');                  // Define o número
titulo.setZona('34');                           // Define a zona
titulo.setSecao('678');                         // Define a seção
pf.setTitulo(titulo);                           // Associa o título à pessoa física

// ========== DAO: Serialização, Salvamento e Leitura ==========

const pfDAO = new PFDAO(pf);                    // Cria DAO passando o objeto PF

var jsonPF = pfDAO.toJSON();                    // Gera o JSON do objeto
pfDAO.saveJSON();                               // Salva no "localStorage" simulado

console.log("Objeto JSON gerado:");
console.log(jsonPF);                            // Exibe o objeto JSON diretamente

console.log("\nString JSON salva:");
console.log(JSON.stringify(jsonPF));            // Exibe o objeto convertido em string JSON

console.log("\nDados recuperados do localStorage:");
console.log(pfDAO.recoveryJSON());              // Exibe os dados recuperados do "banco"