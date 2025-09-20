import { localStorage } from './localStorage.mjs';
import PF from '../PessoaFisica'

export default class PFDAO {
    #pf;

    constructor(pf){
        if (pf instanceof PF){
            this.#pf = pf;
        }
    }

    toJSON()
    {
        
        // FONES
        let fones = []
        for (let fone of this.#pf.getTelefones()){
            fones.push({
                numero: fone.getNumero(),
                ddd: fone.getDdd(),
            })
        }

        return{
            nome: this.#pf.getNome(),
            email: this.#pf.getEmail(),
            endereco: {
                logradouro: this.#pf.getEndereco().getLogradouro(),
                cep: this.#pf.getEndereco().getCep(),
            },
            titulo: {
                numero: this.#pf.getTitulo().getNumero(),
                zona: this.#pf.getTitulo().getZona(),
                secao: this.#pf.getTitulo().getSecao(),
            },
            telefone: fones

        }
    }
    saveJSON() {                                      // 30 // Método para salvar o objeto PJ em formato JSON no localStorage
        // transforma em string JSON usando stringify() e armazena
        localStorage.setItem("pf", JSON.stringify(this.toJSON()));
      }
    
      recoveryJSON() {                                  // 34 // Método para recuperar os dados de PJ armazenados
        // recupera a string armazenada e transforma em JSON usando parse()
        return JSON.parse(localStorage.getItem("pf"));  // 36
      }
} 