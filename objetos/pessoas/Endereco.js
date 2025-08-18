class Endereco 
{
    #logradouro;
    #cep;
    #pessoas = [];

    // RELACIONAMENTO PESSOAS N-1 ENDERECO
    addPessoa(pessoa)
    {
        if (pessoa)
        {
            this.#pessoas.push(pessoa);
            return true;
        }
        else
        {
            return false;
        }
    }
    getPessoas()
    {
        return this.#pessoas
    }

    // Logradouro:
    setLogradouro(logradouro)
    {
        if (logradouro)
        {
            this.#logradouro = logradouro;
            return true;
        }
        else
        {
            return false;
        }
    }
    getLogradouro()
    {
        return this.#logradouro;
    }

    // Cep:
    setCep(cep)
    {
        if (cep)
        {
            this.#cep = cep;
            return true;
        }
        else
        {
            return false;
        }
    }
    getCep()
    {
        return this.#cep;
    }
}
module.exports = Endereco

// TESTES ENDERECO:
/*
endereco1 = new Endereco()
answer1 = endereco1.setCep(92449110)
console.log(answer1)
console.log(endereco1.getCep())
answer2 = endereco1.setLogradouro("Alameda Gabriel Monteiro da Silva")
console.log(answer2)
console.log(endereco1.getLogradouro())
*/
