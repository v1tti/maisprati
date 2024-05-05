function matrizQuatroSomas() {
  let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 3, 14, 15],
    [1, 2, 3, 4, 5],
    [21, 22, 23, 24, 1],
  ];

  console.log("Soma da linha quatro:", somaLinhaQuatro(matriz));
  console.log("Soma da coluna dois:", somaColunaDois(matriz));
  console.log("Soma da diagonal principal", somaDiagonalPrincipal(matriz));
  console.log("Soma de todos elementos:", somaTodosElementos(matriz));
  return;
}

function somaLinhaQuatro(matriz) {
  let soma = 0;
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    soma += matriz[3][coluna];
  }
  return soma;
}
function somaColunaDois(matriz) {
  let soma = 0;
  for (let linha = 0; linha < matriz.length; linha++) {
    soma += matriz[linha][1];
  }
  return soma;
}
function somaDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
      if (linha == coluna) soma += matriz[linha][coluna];
    }
  }
  return soma;
}
function somaTodosElementos(matriz) {
  let soma = 0;
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
      soma += matriz[linha][coluna];
    }
  }
  return soma;
}
module.exports = matrizQuatroSomas;
