class Pessoa
{
    #nome;
    #email;

    setNome(nome)
    {
        if(nome)
        {
            this.#nome = nome; return true;
        } else 
        {
            return false
        }
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
        if( (email) && (email.lastIndexOf("@") != -1) && (email.indexOf(".", email.lastIndexOf("@")) != -1) )
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
