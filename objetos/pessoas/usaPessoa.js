// import Pessoa from "./objetos/Pessoa.js";
const Pessoa = require('./Pessoa.js')
const PessoaFisica = require('./PessoaFisica.js')

// Pessoas =>
const armando = new PessoaFisica()

// Usando pessoas =>
armando.setNome("armando")
armando.setEmail("armando1946@hotmail.com")
armando.SetCPF("05329453259")
console.log("Nome:", armando.getNome(), "\n Email:", armando.getEmail(), "\n CPF:", armando.GetCPF())
