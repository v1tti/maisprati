const prompt = require("prompt-sync")();
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");
const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");

function matrizComValorMultiplicando() {
  let matriz = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
  ];
  let A = parseFloat(prompt("Informe um valor para multiplicar a matriz: "));
  if (valorVazioOuIsNan(A)) A = pedirValorAteVirFloat(A);

  let V = [];
  for (let linha = 0; linha < 6; linha++) {
    for (let coluna = 0; coluna < 6; coluna++) {
      V.push(matriz[linha][coluna] * A);
    }
  }

  let contador = 0;
  V.forEach((linha) => {
    contador++;
    console.log(`Posicao ${contador}: ${linha}`);
  });
}
module.exports = matrizComValorMultiplicando;
