const Pessoa = require("./Pessoa.js");
const Titulo = require('./Titulo.js')

class PessoaFisica extends Pessoa
{
    #cpf
    #titulo

    setTitulo(titulo) {
        if (titulo instanceof Titulo) {
          this.#titulo = titulo;
          titulo.setPF(this); // referência cruzada
          return true;
        } else {
          return false;
        }
    }
      getTitulo() {
        return this.#titulo;
      }    
    
    setCPF(cpf)
    {
        if(cpf)
        {
            this.#cpf = cpf; return true;
        } 
        else 
        {
            return false;
        }
    }
    getCPF()
    {
        return this.#cpf;
    }
}

module.exports = PessoaFisica