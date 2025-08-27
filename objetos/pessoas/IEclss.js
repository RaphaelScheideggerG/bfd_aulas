const PJ = require('./PessoaJuridica.js');

class IE {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    setNumero(numero){
        if(numero){
            this.#numero = numero;
            return true;
        } else{return false;}
    }
    getNumero(){
        return this.#numero;
    }

    setEstado(estado){
        if(estado){
            this.#estado = estado;
            return true;
        } else{return false;}
    }
    getEstado(){
        return this.#estado;
    }
    
    setDataRegistro(dataRegistro){
        if(dataRegistro){
            this.#dataRegistro = dataRegistro;
            return true;
        } else{return false;}
    }
    getDataRegistro(){
        return this.#dataRegistro;
    }

    SetPJ(pj){
        if(pj instanceof PJ){
            this.#pj = pj
        }
    }
    getPJ(){
        return this.#pj
    }
    
}
module.exports = IE;