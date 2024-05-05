function matrizVetorC() {
  let matriz = [
    [1, 2, -3, -4, 5, -6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, -28, -29, 30, 31, 32],
    [33, 34, 35, -36, -37, -12, 39, 40],
    [41, 42, -43, 44, 45, 46, 47, 48],
  ];
  let c = [];
  let elementosNegativos = 0;

  for (let linha = 0; linha < 6; linha++) {
    for (let coluna = 0; coluna < 8; coluna++) {
      if (matriz[linha][coluna] < 0) elementosNegativos++;
    }
    c.push(elementosNegativos);
    elementosNegativos = 0;
  }
  let contador = 0
  c.forEach(linha => {
    contador++
    console.log(`Numero de elementos negativos na linha ${contador}: ${linha}`)
  });
}
module.exports = matrizVetorC;
