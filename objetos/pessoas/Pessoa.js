const Endereco = require('./Endereco');
const Telefone = require('./Telefone');


class Pessoa
{
    #nome;
    #email;
    #endereco;
    #telefones = [];


    // Relacionamento Pessoa N-1 Endereço
    setEndereco(endereco)
    {
        if(endereco instanceof Endereco)
        {
            this.#endereco = endereco;
            endereco.addPessoa(this); // REFERENCIA CRUZADA
            return false;
        }
        else
        {
            return false;
        }
        
    }
    getEndereco(){return this.#endereco}


    // Relacionamento Pessoa N-N Telefone
    addTelefone(telefone)
    {
        if(telefone instanceof Telefone)
        {
            this.#telefones.push(telefone);
            telefone.addPessoa(this); //REFENCIA CRUZADA
            return true;
        }
        else
        {
            return false;
        }
    }
    getTelefones()
    {
        return this.#telefones
    }


    // Nome:
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


    // Email:
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

/*  //TESTE DO RELACIONAMENTO COM ENDEREÇO
const end = new Endereco()
end.setLogradouro("QNM 40")
end.setCep("928839929")

const obj = new Pessoa()
obj.setNome("josé")
obj.setEndereco(end)
console.log(obj.getNome(), obj.getEndereco().getLogradouro(), obj.getEndereco().getCep(), end.getPessoas())
*/

/* //TESTE DO RELACIONAMENTO COM TELEFONE
const numb1 = new Telefone();
numb1.setDdd("61");
numb1.setNumero("92395728395");

const numb2 = new Telefone();
numb2.setDdd("72");
numb2.setNumero("9294949394");

const obj1 = new Pessoa();
obj1.setNome("Geraldo");
obj1.addTelefone(numb1);
obj1.addTelefone(numb2);
console.log(obj1.getNome(), obj1.getTelefones())
*/
