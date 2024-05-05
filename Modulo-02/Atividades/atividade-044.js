function stringsNoObjeto() {
  let objeto = { nome: "Fulano", idade: 23, telefone: "61999820961" };
  let contadorStrings = 0;

  for (let propriedade in objeto) {
    if (typeof objeto[propriedade] === "string") contadorStrings++;
  }
  return console.log(`Numero de strings no objeto: ${contadorStrings}`);
}
module.exports = stringsNoObjeto;
