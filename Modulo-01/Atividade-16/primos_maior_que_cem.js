let contador = 0;
let valor = 100;

while (contador < 50) {
  while (
    valor % 2 !== 0 &&
    valor % 3 !== 0 &&
    valor % 5 !== 0 &&
    valor % 7 !== 0 &&
    valor % 11 !== 0 &&
    valor % 13 !== 0 &&
    valor % 17 !== 0 &&
    valor % 19 !== 0
  ) {
    console.log(valor);
    contador++;
    break;
  }
  valor += 1;
}
