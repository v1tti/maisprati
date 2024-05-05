function matrizDiagonalPrincipalVezesSecundaria() {
  let matriz = [
    [2, 4, 3],
    [5, 1, 3],
    [4, 3, 1],
  ];
  let media = mediaDiagonalSecundaria(matriz);
  console.log("Matriz: ");
  matriz.forEach((linha) => {
    console.log(linha);
  });
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
      if (coluna === linha) {
        matriz[linha][coluna] *= media;
      }
    }
  }
  console.log("Matriz alterada: ");
  matriz.forEach((linha) => {
    console.log(linha);
  });
}

function mediaDiagonalSecundaria(matriz) {
  let totalDeValores = 0;
  let somaDeValores = 0;
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
      if (coluna === matriz[0].length - 1 - linha) {
        somaDeValores += matriz[linha][coluna];
        totalDeValores++;
      }
    }
  }
  return (somaDeValores / totalDeValores).toFixed(2);
}
module.exports = matrizDiagonalPrincipalVezesSecundaria;
