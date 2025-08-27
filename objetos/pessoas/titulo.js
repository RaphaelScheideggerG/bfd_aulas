class Titulo{
    #numero
    #zona
    #secao

    setNumero(num){
        if(num){
            this.#numero = num
            return true
        } else{return false;}
    }
    getNumero(){
        return this.#numero
    }
 
    setZona(zona){
        if(zona){
            this.#zona = zona
            return true
        } else{return false;}
    }
    getZona(){
        return this.#zona
    }
    
    setSecao(secao){
        if(secao){
            this.#secao = secao
            return true
        } else{return false;}
    }
    getSecao(){
        return this.#secao
    }
    
}