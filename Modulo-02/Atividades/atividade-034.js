function matrizCinquentaCinquenta() {
  let matriz = [];
  let count = 1;
  for (let i = 0; i < 50; i++) {
    matriz.push([]);
    for (let j = 0; j < 50; j++) {
      matriz[i].push(count);
      count++;
    }
  }
  for (let linha = 0; linha < matriz.length; linha++) {
    let elementoDiagonalPrincipal = matriz[linha][linha];
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
      matriz[linha][coluna] *= elementoDiagonalPrincipal;
    }
  }
  matriz.forEach((linha) => {
    console.log(linha);
  });

  return;
}
module.exports = matrizCinquentaCinquenta;
