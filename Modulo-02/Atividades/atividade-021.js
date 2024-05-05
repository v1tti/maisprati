const prompt = require("prompt-sync")();
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");
const pedirValorAteVirInteiro = require("../utils/pedirValorAteVirInteiro");

function pesoIdeal() {
  let altura = 0;
  let sexo = "";
  let resultado = 0;

  altura = parseInt(prompt("Informe sua altura em cm: "));
  if (valorVazioOuIsNan(altura)) altura = pedirValorAteVirInteiro(altura);

  sexo = parseInt(prompt("Informe seu sexo (1-M|2-F): "));
  if (sexo !== 1 && sexo !== 2) sexo = pedirValorAteVirInteiro(sexo);

  if (sexo === 1) {
    resultado = calcularPesoIdealHomem(altura / 100);
  }
  if (sexo === 2) {
    resultado = calcularPesoIdealMulher(altura / 100);
  }
  return console.log(
    `O resultado seu peso ideal eh: ${resultado.toFixed(2)} KG`
  );
}
function calcularPesoIdealHomem(altura) {
  return altura * 72.1 - 58;
}
function calcularPesoIdealMulher(altura) {
  return 62.1 * altura - 44.7;
}
module.exports = pesoIdeal;
