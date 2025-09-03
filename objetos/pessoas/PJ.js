const Pessoa = require('./Pessoa.js');  // Importa a classe base Pessoa (superclasse)
const IE = require('./IEclss.js');   // Importa a classe IEclss para relacionamento posterior


class PJ extends Pessoa {  // Declaração da classe PJ herdando de Pessoa
  #cnpj;

  setCNPJ(cnpj) {
    if (cnpj) {
      // 11
      if (cnpj.length < 18) {  // Verifica se o CNPJ possui o tamanho mínimo adequado
        return false;          // Caso contrário, retorna false
      }
      // 12
      this.#cnpj = cnpj;       // Atribui valor ao atributo privado
      return true;
    } else {
      // 13
      return false;            // Retorna false se o campo estiver vazio
    }
  }

// 14
  getCNPJ() {
    return this.#cnpj;         // Retorna o valor do CNPJ
  }

  // Sobrescrita do método setEmail herdado da classe Pessoa
  setEmail(email) {
    if (email !== '') {
      if (email.includes('@')) {         // Verifica se o email contém "@" como validação básica
        super.setEmail(email);           // Chama método da superclasse
        return true;
      }
    } else {
      // 20
      return false;                      // Retorna false se string vazia
    }
  }

// 21
  #ie;  // Atributo privado para armazenar objeto do tipo IE

  setIE(ie) {
    // 23
    if (ie instanceof IE) {             // Verifica se o parâmetro é instância da classe IE
      this.#ie = ie;
      ie.setPJ(this);                   // Referência cruzada (IE também aponta para este PJ)
      return true;
    } else {
      return false;
    }
  }
  getIE() {
    return this.#ie;                    // Retorna o objeto IE relacionado
  }
} // fim da classe
module.exports = PJ; // Exporta a classe para uso externo
