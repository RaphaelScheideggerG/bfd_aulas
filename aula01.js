// comentario em linha
/* 
comentário em bloco
*/


// Definir uma variável (JS é uma linguagem NÃO TYPADA)
{ // Início do bloco
    var x = 'Hello (x)'; // Variável global (pode se acessada fora do bloco)
    let y = 'Hello (y)'; // Variável local (só é acessada dentro do bloco)
    const pi = 3.14; // Declara variável constante imutável (útil para frameworks)
    console.log(x); // Mostra no console o valor da variável x
  } // Fim do bloco
  
  
  // Testes
  try {
    console.log('DADO y: ' + y); // Tenta mostrar o conteudo da variável local fora do bloco
  } catch (error) { // "captura" o erro e guarda na variável "erro_soma"
    console.log('ERRO: ', error.message); // Mostra o tipo de erro sem travar o programa
  }
  try {
    console.log('INFORMAÇÃO SOMA: ', soma); // Tenta mostrar o conteudo de soma antes de definir a variável soma
  } catch (erro_soma) { // "captura" o erro e guarda na variável "erro_soma"
    console.log('ERRO: ', erro_soma.message); // mostra apenas o nome do erro armazenado na variável "erro_soma"
  } finally { // Executa o resto do código apesar dos erros
    (x = 2), (y = -2), (soma = x + y);
    console.log('DADO X: ' + x);
    console.log('DADO Y: ' + y);
    console.log('INFORMAÇÃO SOMA: ' + soma);
  }
  