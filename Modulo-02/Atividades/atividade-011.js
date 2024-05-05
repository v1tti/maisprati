const prompt = require("prompt-sync")();
const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function mostrarPA() {
  let progressaoAritmetica = [];
  let somatorioDaSequencia = 0;
  let primeiroTermo = parseFloat(prompt("Informe o primeiro termo da PA: "));
  if (valorVazioOuIsNan(primeiroTermo))
    primeiroTermo = pedirValorAteVirFloat(primeiroTermo);
  progressaoAritmetica.unshift(primeiroTermo);

  let razao = parseFloat(prompt("Informe a razao da PA: "));
  if (valorVazioOuIsNan(razao)) razao = pedirValorAteVirFloat(razao);

  let termoAtual = primeiroTermo;
  somatorioDaSequencia = primeiroTermo;
  while (progressaoAritmetica.length < 10) {
    termoAtual = termoAtual + razao;
    somatorioDaSequencia += termoAtual;
    progressaoAritmetica.push(termoAtual);
  }
  return console.log(
    `PA resultante: ${progressaoAritmetica}, soma entre todos valores: ${somatorioDaSequencia}`
  );
}
module.exports = mostrarPA;
