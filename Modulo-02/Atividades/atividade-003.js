const prompt = require("prompt-sync")();
const SOLICITAR_DISTANCIA =
  "Informe a distancia que deseja percorrer em km/h: ";
const pedirValorAteVirInteiro = require("../utils/pedirValorAteVirInteiro");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function calcularPrecoPassagem() {
  let precoParaViagensAte200KmEmReais = 0.5;
  let precoParaViagensMaisLongasEmReais = 0.45;
  let precoViagem = 0;
  let distancia = parseFloat(prompt(SOLICITAR_DISTANCIA));

  if (valorVazioOuIsNan(distancia))
    distancia = pedirValorAteVirInteiro(distancia);

  if (distancia <= 200)
    precoViagem = distancia * precoParaViagensAte200KmEmReais;
  else precoViagem = distancia * precoParaViagensMaisLongasEmReais;

  return console.log(`Sua passagem custara R$:${precoViagem}`)
}

module.exports = calcularPrecoPassagem;
