const prompt = require("prompt-sync")();
const SOLICITAR_VELOCIDADE = "Informe a velocidade do carro em km/h: ";
const pedirValorAteVirInteiro = require("../utils/pedirValorAteVirInteiro");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function calcularMulta() {
  let velocidade = parseFloat(prompt(SOLICITAR_VELOCIDADE));
  if (valorVazioOuIsNan(velocidade))
    velocidade = pedirValorAteVirInteiro(velocidade);
  let taxaDeMultaPorKmExcedidoEmReais = 5;

  if (velocidade > 80) {
    return console.log(
      `Voce foi multado no valor de ${
        (velocidade - 80) * taxaDeMultaPorKmExcedidoEmReais
      } reais`
    );
  }
}

module.exports = calcularMulta;
