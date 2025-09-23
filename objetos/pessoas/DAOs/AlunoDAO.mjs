import { localStorage } from './localStorage.mjs';
//const Aluno = require(`../Aluno.js`)
import Aluno from '../Aluno.js';

export default class AlunoDAO{
    #aluno
    constructor(aluno){
        if (aluno instanceof Aluno){
            this.#aluno = aluno
        }
    }

    toJSON(){
        // FONES
        let fones = []
        for (let fone of this.#aluno.getTelefones()){
            fones.push({
                numero: fone.getNumero(),
                ddd: fone.getDdd(),
            })
        }

        return{
            nome: this.#aluno.getNome(),
            email: this.#aluno.getEmail(),
            telefones: fones,
            endereco: {
                logradouro: this.#aluno.getEndereco().getLogradouro(),
                cep: this.#aluno.getEndereco().getCep(),
            },
            titulo: {
                numero: this.#aluno.getTitulo().getNumero(),
                zona: this.#aluno.getTitulo().getZona(),
                secao: this.#aluno.getTitulo().getSecao(),
            },
            matricula: this.#aluno.getMatricula(),
            curso: this.#aluno.getCurso(),
        }
    }
    
    saveJSON() {                                      // 30 // Método para salvar o objeto PJ em formato JSON no localStorage
        // transforma em string JSON usando stringify() e armazena
        localStorage.setItem("aluno", JSON.stringify(this.toJSON()));
    }
    
    recoveryJSON() {                                  // 34 // Método para recuperar os dados de PJ armazenados
        // recupera a string armazenada e transforma em JSON usando parse()
        return JSON.parse(localStorage.getItem("aluno"));  // 36
    }

}
