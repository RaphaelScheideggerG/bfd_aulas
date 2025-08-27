class Telefone
{
    #ddd;
    #numero;
    #pessoas = [];

    // RELACIONAMENTO PESSOA N-N TELEFONE
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

    
    // DDD:
    setDdd(ddd)
    {
        if (ddd)
        {
            this.#ddd = ddd;
            return true;
        }
        else
        {
            return false;
        }
    }
    getDdd()
    {
        return this.#ddd;
    }

    // NUMERO:
    setNumero(numero)
    {
        if (numero)
        {
            this.#numero = numero;
            return true;
        }
        else
        {
            this.#numero = "" ; return false;
        }
    }
    getNumero()
    {
        return this.#numero;
    }
}
module.exports = Telefone;

// TESTES TELEFONE -> working
/* 
tel1 = new Telefone()
answer = tel1.setDdd(81)
console.log(answer)
console.log(tel1.getDdd())
resposta = tel1.setNumero()
console.log(resposta)
console.log(tel1.getNumero())
*/