const prompt = require(`prompt-sync`)();
const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

let valorFinal = { somatorio: 0, menorValor: "", media: 0, valoresPares: 0 };

let desejaContinuar = true;

function receberVariosNumeros() {
  let valorAtual = 0;
  let totalDeValores = 0;
  valorFinal.somatorio = 0;
  valorFinal.valoresPares = 0;

  do {
    valorAtual = parseFloat(prompt("Informe um valor: "));
    if (valorVazioOuIsNan(valorAtual))
      valorAtual = pedirValorAteVirFloat(valorAtual);
    totalDeValores++;

    valorFinal.somatorio += valorAtual;
    if (!valorFinal.menorValor) {
      valorFinal.menorValor = valorAtual;
    }
    if (valorAtual < valorFinal.menorValor) {
      valorFinal.menorValor = valorAtual;
    }
    if (valorAtual % 2 == 0) {
      valorFinal.valoresPares++;
    }

    desejaContinuar = parseFloat(prompt("Deseja continuar? (1-sim|0-nao): "));
    if (valorVazioOuIsNan(desejaContinuar))
      desejaContinuar = pedirValorAteVirFloat(desejaContinuar);

    if (desejaContinuar == 0) desejaContinuar = false;
  } while (desejaContinuar);

  valorFinal.media = valorFinal.somatorio / totalDeValores;
  return console.log(
    `Somatorio: ${valorFinal.somatorio}, menor valor digitado: ${valorFinal.menorValor}, media entre todos valores: ${valorFinal.media}, quantidade de valores pares: ${valorFinal.valoresPares}`
  );
}

module.exports = receberVariosNumeros;
