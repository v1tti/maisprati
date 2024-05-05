function fibonacciDezPrimeiros() {
  let vetorFibonacci = [];
  vetorFibonacci[0] = 1;
  vetorFibonacci[1] = 1;
  let contador = 1;
  while (vetorFibonacci.length < 10) {
    vetorFibonacci.push(
      vetorFibonacci[contador] + vetorFibonacci[contador - 1]
    );
    contador++;
  }
  return console.log(`Sequencia de Fibonacci: ${vetorFibonacci}`);
}
module.exports = fibonacciDezPrimeiros;
