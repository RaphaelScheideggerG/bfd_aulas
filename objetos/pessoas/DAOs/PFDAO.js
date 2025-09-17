import { localStorage } from './localStorage.mjs';
import PF from '../PessoaFisica'

export class PFDAO {
    #pf;

    constructor(pf){
        if (pf instanceof PF){
            this.#pf = pf;
        }
    }

    toJSON()
    {
        // TITULO
        let vtitle = []
        
        // FONES
        let vfones = []
        
        // ENDEREÇO

        return{
            nome: this.#pf.getNome(),
            email: this.#pf.getEmail(),
            endereco: this.#pf.getEndereco(),
            
        }
    }
} 