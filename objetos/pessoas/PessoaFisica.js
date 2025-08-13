const Pessoa = require("./Pessoa");

class PessoaFisica extends Pessoa
{
    #cpf
    
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