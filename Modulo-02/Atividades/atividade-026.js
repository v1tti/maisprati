function matrizProduto() {
  let matrizA = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ];
  let matrizB = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
  ];
  if (matrizA[0].length !== matrizB.length) {
    console.log("Nao eh possivel multiplicar as matrizes.");
    return;
  }
  let resultado = [];
  for (let index = 0; index < matrizA.length; index++) {
    resultado.push([]);
    for (let j = 0; j < matrizB[0].length; j++) {
      let soma = 0;
      for (let k = 0; k < matrizA[0].length; k++) {
        soma += matrizA[index][k] * matrizB[k][j];
      }
      resultado[index].push(soma);
    }
  }

  resultado.forEach((linha) => {
    console.log(`${linha}`);
  });
  return;
}
module.exports = matrizProduto;
