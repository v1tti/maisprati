const prompt = require("prompt-sync")();

const SOLICITAR_VALOR =
  "Informe um valor para adicionar na média (informe 0 para calcular): ";
const ERRO = "Operação Inválida";
let mediaFinal = 0;
let valor = 1;
let totalDeValores = -1;

while (valor !== 0 && !isNaN(valor)) {
  valor = parseFloat(prompt(SOLICITAR_VALOR));
  mediaFinal += valor;
  totalDeValores++;
}

mediaFinal = mediaFinal / totalDeValores;

while (isNaN(mediaFinal)) {
  console.log(ERRO);
  break;
}
while (!isNaN(mediaFinal)) {
  console.log(mediaFinal);
  break;
}
