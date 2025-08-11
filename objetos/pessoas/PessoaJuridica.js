import Pessoa from "./Pessoa";

class PessoaJuridica extends Pessoa
{
    #cnpj;

    setCNPJ(cnpj)
    {
        if ( (cnpj) && (cnpj.length >= 18) ) 
        {
            cnpj = this.#cnpj;
        } else cnpj = ""; print("CNPJ deve conter 14 digitos"); return false;
    }
    getCNPJ(cnpj)
    {
        return cnpj;
    }

    setEmail(email)
    {
        if(email != "1234@gmail.com")
        {
            super.setEmail();
        } else{return false;}
    }
}

module.exports = PessoaJuridica
