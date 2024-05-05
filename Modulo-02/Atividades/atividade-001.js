const prompt = require("prompt-sync")();
const pedirValorAteVirInteiro = require("../utils/pedirValorAteVirInteiro");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");
const SOLICITAR_CIGARROS =
  "Informe quantos cigarros voce fuma por dia em media: ";
const SOLICITAR_ANOS_FUMANDO = "Informe quantos anos voce fuma: ";

function calcularTempoVidaFumante() {
  let cigarrosPorDia = parseInt(prompt(SOLICITAR_CIGARROS));
  if (valorVazioOuIsNan(cigarrosPorDia))
    cigarrosPorDia = pedirValorAteVirInteiro(cigarrosPorDia);
  let anosFumando = parseInt(prompt(SOLICITAR_ANOS_FUMANDO));
  if (valorVazioOuIsNan(anosFumando))
    anosFumando = pedirValorAteVirInteiro(anosFumando);

  let tempoPerdidoAoFumarEmMinutos = 10;
  let diasFumando = anosFumando * 365.3;
  let totalCigarrosFumados = diasFumando * cigarrosPorDia;
  let diasPerdidos =
    totalCigarrosFumados * 0.000694444 * tempoPerdidoAoFumarEmMinutos;
  return console.log(
    `Voce perdeu aproximadamente ${Math.floor(diasPerdidos)} dias de vida`
  );
}

module.exports = calcularTempoVidaFumante;
