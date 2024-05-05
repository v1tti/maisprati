function retirarNulosENegativos() {
  vetorA = [];
  vetorB = [];

  for (let index = 0; index < 100; index++) {
    let numeroAleatorio = Math.floor(Math.random() * 201) - 100;
    vetorA.push(numeroAleatorio);
  }

  for (let index = vetorA.length - 1; index >= 0; index--) {
    if (vetorA[index] <= 0) {
      vetorB.push(vetorA[index]);
      vetorA.splice(index, 1);
    }
  }
  console.log("Vetor A: ");
  vetorA.forEach((numero) => {
    console.log(numero);
  });
  console.log("Vetor B: ");
  vetorB.forEach((numero) => {
    console.log(numero);
  });
  return;
}
module.exports = retirarNulosENegativos;
