const prompt = require("prompt-sync")();
const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");
const pedirValorAteVirInteiro = require("../utils/pedirValorAteVirInteiro");

function coletaDadosPrefeitura() {
  let dados = [];
  let salariosAteTrezentosECinquenta = 0;
  let salario = 0;
  let filhos = 0;
  let maiorSalario = 0;
  let somaSalarios = 0;
  let somaFilhos = 0;
  let desejaContinuar = true;

  while (desejaContinuar) {
    salario = parseFloat(prompt("Informe o salario: "));
    if (valorVazioOuIsNan(salario)) salario = pedirValorAteVirFloat(salario);

    filhos = parseInt(prompt("Informe o numero de filhos: "));
    if (valorVazioOuIsNan(filhos)) filhos = pedirValorAteVirInteiro(filhos);

    if (salario < 350) salariosAteTrezentosECinquenta++;
    if (salario > maiorSalario) maiorSalario = salario;

    somaFilhos += filhos;
    somaSalarios += salario;

    dados.push({ salario: salario, filhos: filhos });

    desejaContinuar = parseInt(prompt("Deseja continuar? (1-S|2-N): "));
    while (desejaContinuar !== 1 && desejaContinuar !== 2) {
      desejaContinuar = parseInt(prompt("Digite apenas 1 ou 2"));
    }
    if (desejaContinuar == 2) desejaContinuar = false;
  }

  console.log(
    `Media de salario: R$ ${somaSalarios / dados.length}, media de filhos: ${
      somaFilhos / dados.length
    }, maior salario: R$ ${maiorSalario}, percentual de salarios ate R$ 350: ${
      (salariosAteTrezentosECinquenta / dados.length) * 100
    } %`
  );
}
module.exports = coletaDadosPrefeitura;
