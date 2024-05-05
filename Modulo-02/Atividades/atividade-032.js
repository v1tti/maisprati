function matrizDividirLinhasMaiorModulo() {
  let matriz = [
    [4, 5, 7, 2, 9, 8, 3, 4, 6, 5, 6, 8, 7],
    [3, 7, 8, 6, 4, 10, 2, 1, 5, 3, 6, 7, 5],
    [6, 3, 4, 9, 8, 6, 5, 7, 4, 5, 3, 8, 4],
    [7, 2, 1, 6, 4, 8, 5, 3, 6, 7, 2, 9, 5],
    [8, 5, 3, 2, 7, 4, 9, 6, 8, 3, 7, 5, 2],
    [6, 7, 2, 3, 8, 5, 4, 9, 6, 2, 8, 4, 3],
    [4, 9, 8, 1, 6, 5, 2, 3, 7, 4, 8, 5, 2],
    [3, 6, 4, 8, 5, 9, 2, 3, 7, 5, 6, 4, 1],
    [7, 3, 6, 2, 4, 9, 5, 7, 8, 3, 1, 6, 2],
    [8, 4, 7, 3, 6, 5, 2, 1, 9, 3, 7, 4, 6],
    [5, 3, 6, 4, 8, 9, 2, 5, 7, 3, 6, 4, 8],
    [7, 4, 9, 6, 2, 5, 8, 3, 7, 4, 5, 1, 3],
  ];

  console.log("Matriz lida: ");
  matriz.forEach((linha) => {
    console.log(linha);
  });

  console.log("Matriz modificada: ");
  contadorLinha = 0;
  matriz.forEach((linha) => {
    let maiorElemento = acharMaiorElementoDaLinha(matriz, contadorLinha);
    matriz[contadorLinha] = dividirLinha(matriz, contadorLinha, maiorElemento);
    console.log(matriz[contadorLinha]);
    contadorLinha++;
  });
}
function acharMaiorElementoDaLinha(matriz, linha) {
  let maiorElemento = matriz[linha][0];
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    if (matriz[linha][coluna] > maiorElemento) {
      maiorElemento = matriz[linha][coluna];
    }
  }
  return maiorElemento;
}
function dividirLinha(matriz, linha, maiorElemento) {
  let linhaDividida = [];
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    linhaDividida.push((matriz[linha][coluna] / maiorElemento).toFixed(2));
  }
  return linhaDividida;
}
module.exports = matrizDividirLinhasMaiorModulo;
