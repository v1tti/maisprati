function separarParesImparesEmCinco() {
  let numeros = [
    1, 2, 32, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 52, 24, 25, 54, 27, 28, 29, 30,
  ];

  let pares = [];
  let impares = [];

  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 === 0) {
      pares.push(numeros[index]);
    } else {
      impares.push(numeros[index]);
    }
    if (pares.length === 5) {
      console.log(`Numeros pares: ${pares}`);
      pares = [];
    }
    if (impares.length === 5) {
      console.log(`Numeros impares: ${impares}`);
      impares = [];
    }
  }
  if (pares.length > 0) {
    console.log(`Numeros pares: ${pares}`);
  }
  if (impares.length > 0) {
    console.log(`Numeros impares: ${impares}`);
  }

  return;
}
module.exports = separarParesImparesEmCinco;
