const prompt = require("prompt-sync")();

function operacoesVetor() {
  let vetor = [1, 6, 3, 4, 5, 2];

  let operacaoEscolhida = parseInt(
    "Informe a operacao desejada (1-Somar elementos|2-Multiplicar elementos|3-Media dos elementos|4-Ordenar elementos em ordem crescente|5-Mostrar o vetor): "
  );
  while (
    operacaoEscolhida != 1 &&
    operacaoEscolhida != 2 &&
    operacaoEscolhida != 3 &&
    operacaoEscolhida != 4 &&
    operacaoEscolhida != 5
  ) {
    operacaoEscolhida = parseInt(
      prompt("Informe uma operacao valida (de 1 ate 5): ")
    );
  }

  switch (operacaoEscolhida) {
    case 1:
      let soma = 0;
      vetor.forEach((numero) => {
        soma += numero;
      });
      console.log(`Soma: ${soma}`);
      break;
    case 2:
      let multiplicacao = 1;
      vetor.forEach((numero) => {
        multiplicacao *= numero;
      });
      console.log(`Produto: ${multiplicacao}`);
      break;
    case 3:
      let somaTotal = 0;
      vetor.forEach((numero) => {
        somaTotal += numero;
      });
      console.log(`Media: ${somaTotal / vetor.length}`);
      break;
    case 4:
      let vetorOrdenado = [...vetor].sort((a, b) => a - b);
      console.log(`Vetor ordenado: ${vetorOrdenado}`);
      break;
    case 5:
      console.log(`Vetor: ${vetor}`);
      break;
  }
  return;
}
module.exports = operacoesVetor;
