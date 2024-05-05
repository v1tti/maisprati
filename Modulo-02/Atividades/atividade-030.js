let SL = [];
let SC = [];

function matrizCincoPorCinco() {
  let matriz = [
    [1, 2, 3, 4, 2],
    [6, 7, 8, 9, 3],
    [11, 12, 13, 14, 4],
    [16, 17, 18, 19, 5],
    [1, 2, 3, 4, 5],
  ];

  matriz.forEach((linha) => {
    console.log(linha);
  });
  for (let linha = 0; linha < matriz.length; linha++) {
    SL.push(somarLinhaMatriz(matriz, linha));
  }
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    SC.push(somarColunaMatriz(matriz, coluna));
  }
  console.log(`Vetor SL: ${SL}`);
  console.log(`Vetor SC: ${SC}`);
}
function somarLinhaMatriz(matriz, linha) {
  let soma = 0;
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    soma += matriz[linha][coluna];
  }

  return soma;
}
function somarColunaMatriz(matriz, coluna) {
  let soma = 0;
  for (let linha = 0; linha < matriz.length; linha++) {
    soma += matriz[linha][coluna];
  }
  return soma;
}
module.exports = matrizCincoPorCinco;
