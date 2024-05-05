const prompt = require("prompt-sync")();
const valorVazioOuIsNan = require("./valorVazioOuIsNan");

function pedirValorAteVirInteiro(valor) {
  while (valorVazioOuIsNan(valor)) {
    valor = parseInt(prompt("Informe um numero inteiro: "));
  }

  return valor;
}

module.exports = pedirValorAteVirInteiro;
