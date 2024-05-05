const prompt = require("prompt-sync")();
const valorVazioOuIsNan = require("./valorVazioOuIsNan");

function pedirValorAteVirFloat(valor) {
  while (valorVazioOuIsNan(valor)) {
    valor = parseInt(prompt("Informe um numero valido: "));
  }

  return valor;
}

module.exports = pedirValorAteVirFloat;
