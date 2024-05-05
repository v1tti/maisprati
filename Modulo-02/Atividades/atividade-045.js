function chavesNoArray() {
  let arrayDeStrings = ["cachorro", "gato", "cachorro", "sapo", "sapo", "sapo"];
  let objetoResultante = {};
  let objetoInvertido = {};

  for (propriedade of arrayDeStrings) {
    if (objetoResultante[propriedade]) {
      objetoResultante[propriedade]++;
    } else {
      objetoResultante[propriedade] = 1;
    }
  }
  for (let chave in objetoResultante) {
    let valor = objetoResultante[chave];
    objetoInvertido[valor] = chave;
  }

  for (propriedade in objetoInvertido) {
    console.log(`${propriedade}: ${objetoInvertido[propriedade]}`);
  }
  return;
}
module.exports = chavesNoArray;
