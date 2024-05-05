function matrizIdentidade() {
  let matriz = [];
  let vetor = [];
  let linhas = 7;
  let colunas = 7;
  for (let linha = 0; linha < linhas; linha++) {
    for (let coluna = 0; coluna < colunas; coluna++) {
      if (linha == coluna) vetor.push(1);
      else vetor.push(0);
    }
    matriz.push(vetor);
    vetor = [];
  }
  for (let index = 0; index < matriz.length; index++) {
    console.log(matriz[index]);
  }
}
module.exports = matrizIdentidade;
