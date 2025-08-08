const Pessoa = require("./Pessoa");

class PessoaFisica extends Pessoa
{
    #cpf
    
    SetCPF(cpf)
    {
        if(cpf)
        {
            this.#cpf = cpf; return true;
        } 
        else 
        {
            this.#cpf = ""; return false;
        }
    }
    GetCPF(cpf)
    {
        return this.#cpf;
    }
}

module.exports = PessoaFisica