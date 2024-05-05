const prompt = require("prompt-sync")();
const pedirValorAteVirInteiro = require("../utils/pedirValorAteVirInteiro");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function dezInteirosVetor() {
  let resultado = { vetor: [], posicaoPares: [] };
  while (resultado.vetor.length < 10) {
    let numeroParaAdicionar = parseInt(
      prompt("Informe um inteiro para adicionar no vetor: ")
    );
    if (valorVazioOuIsNan(numeroParaAdicionar))
      numeroParaAdicionar = pedirValorAteVirInteiro(numeroParaAdicionar);

    resultado.vetor.push(numeroParaAdicionar);

    if (numeroParaAdicionar % 2 == 0)
      resultado.posicaoPares.push(resultado.vetor.indexOf(numeroParaAdicionar));
  }
  return console.log(
    `Vetor resultante: ${resultado.vetor}, posicao dos numeros pares: ${resultado.posicaoPares}`
  );
}
module.exports = dezInteirosVetor;
