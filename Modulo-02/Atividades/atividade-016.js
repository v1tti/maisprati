function preencherVintePosicoesVetor() {
  let numeros = [];

  while (numeros.length < 20) {
    numeros.push(Math.floor(Math.random() * 98) + 1);
  }
  console.log(`Numeros gerados: ${numeros}`);

  return console.log(`Numeros ordenados: ${numeros.sort()}`);
}
module.exports = preencherVintePosicoesVetor;
