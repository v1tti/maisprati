function fibonacciQuinzePrimeiros() {
  let vetorFibonacci = [];
  preencherDoisPrimeirosValores(vetorFibonacci);
  preencherVetorAtePosicaoInformada(vetorFibonacci, 15);

  return console.log(`Sequencia de Fibonacci: ${vetorFibonacci}`);
}
function preencherDoisPrimeirosValores(vetor) {
  while (vetor.length < 2) vetor.push(1);
}
function preencherVetorAtePosicaoInformada(vetor, posicao) {
  let contador = 1;
  while (vetor.length < posicao) {
    vetor.push(vetor[contador] + vetor[contador - 1]);
    contador++;
  }
}
module.exports = fibonacciQuinzePrimeiros;
