const prompt = require("prompt-sync")();
const SOLICITAR_SEGMENTO_UM = "Informe o primeiro segmento de reta: ";
const SOLICITAR_SEGMENTO_DOIS = "Informe o segundo segmento de reta: ";
const SOLICITAR_SEGMENTO_TRES = "Informe o terceiro segmento de reta: ";
const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function calcularTriangulo() {
  let segmentoUm = parseFloat(prompt(SOLICITAR_SEGMENTO_UM));
  let segmentoDois = parseFloat(prompt(SOLICITAR_SEGMENTO_DOIS));
  let segmentoTres = parseFloat(prompt(SOLICITAR_SEGMENTO_TRES));

  if (valorVazioOuIsNan(segmentoUm))
    segmentoUm = pedirValorAteVirFloat(segmentoUm);
  if (valorVazioOuIsNan(segmentoDois))
    segmentoDois = pedirValorAteVirFloat(segmentoDois);
  if (valorVazioOuIsNan(segmentoTres))
    segmentoTres = pedirValorAteVirFloat(segmentoTres);

  if (
    segmentoUm + segmentoDois > segmentoTres &&
    segmentoUm + segmentoTres > segmentoDois &&
    segmentoDois + segmentoTres > segmentoUm
  )
    return console.log("O triangulo existe");
  else return console.log("O triangulo nao existe");
}

module.exports = calcularTriangulo;
