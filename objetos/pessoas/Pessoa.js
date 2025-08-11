class Pessoa
{
    #nome;
    #email;

    setNome(nome)
    {
        if(nome)
        {
            console.log("Tentando atribuir valor de nome", nome, "Foi possivel, o nome nao é vazio"); this.#nome = nome; return true;
        } else {console.log("Tentando atribuir valor de nome", nome, "Não foi possível, o nome é vazio"); this.#nome = null; return false}
    }
    getNome()
    {
        if(this.#nome)
        {
            return this.#nome;
        } else {return "Nome de usuario INVÁLIDO"}
    }

    setEmail(email)
    {
        if( (email) && (email.lastIndexOf("@") != -1) && (email.str.indexOf(".", email.lastIndexOf("@")) != -1) )
        {
            this.#email = email; return true;
        } else{return false;}
    }
    getEmail()
    {
        if(this.#email)
        {
            return this.#email;
        } else{return "O email é INVÁLIDO";}
    }
}

module.exports = Pessoa;
