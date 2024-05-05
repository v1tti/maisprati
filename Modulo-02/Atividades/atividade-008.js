const prompt = require("prompt-sync")();

const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function calculaVidaSaudavel() {
  let pontos = 0;
  let horasAtividade = parseFloat(
    prompt("Informe quantas horas de atividade fisica voce teve no mes: ")
  );
  if (valorVazioOuIsNan(horasAtividade))
    horasAtividade = pedirValorAteVirFloat(horasAtividade);

  if (horasAtividade < 10) {
    pontos = horasAtividade * 2;
  }
  if (horasAtividade >= 10 && horasAtividade <= 20) {
    pontos = horasAtividade * 5;
  }
  if (horasAtividade > 20) {
    pontos = horasAtividade * 10;
  }

  return console.log(`Voce Ganhou R$ ${pontos * 0.05}`);
}
module.exports = calculaVidaSaudavel;
