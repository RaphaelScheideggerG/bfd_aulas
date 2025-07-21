class Pessoa{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    // Função de calculo imc
    imc(){
        let imc = this.peso / (this.altura*this.altura);
        this.imc = imc;
        return imc;
        
    }
}

module.exports = Pessoa;
