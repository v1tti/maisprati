const PRIMOS_MOSTRADOS = 50
let contador = 0;
let valor = 100;

while (contador < PRIMOS_MOSTRADOS) {
  valor++;
  let divisor = 2;
  let isPrimo = true;

  while (isPrimo && divisor < valor) {
    isPrimo = valor % divisor !== 0;
    divisor++;
  }

  (isPrimo && console.log(valor), contador += isPrimo);
}
