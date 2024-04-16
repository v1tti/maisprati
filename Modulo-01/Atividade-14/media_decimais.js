const prompt = require("prompt-sync")();

const SOLICITAR_VALOR =
  "Informe um valor para adicionar na média (informe 0 para calcular): ";
let mediaFinal = 0;
let valor = 1;
let totalDeValores = -1;

while (valor !== 0) {
  valor = parseFloat(prompt(SOLICITAR_VALOR));
  mediaFinal += valor;
  totalDeValores++;
}

mediaFinal = mediaFinal / totalDeValores;

console.log(mediaFinal);
