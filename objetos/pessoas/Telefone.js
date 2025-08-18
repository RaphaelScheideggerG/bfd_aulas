class Telefone
{
    #ddd;
    #numero;

    // Logradouro:
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

    // Cep:
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