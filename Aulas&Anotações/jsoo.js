// Classe -> Estrutura do objeto
class Pessoa {
    constructor(peso, altura){
        this.peso = peso;
        this.alutra = altura;
    }
    imc(){
        let imc = this.peso / (this.alutra * this.alutra);
        return imc;
    }
}

// Instancia -> objeto
const Marcelo = new Pessoa(70, 1.90);

// Objeto Pedro
const Pedro = new Pessoa();
Pedro.alutra = 1.67;
Pedro.peso = 44;

console.log("Marcelo IMC: " ,Marcelo.imc().toFixed(2));
console.log("Pedro IMC: ", Pedro.imc().toFixed(2));

//Exportando
module.exports = Pessoa; // Exportando classe Não precisa das chaves {}
module.exports = {Pedro, Marcelo} // Exportar objetos