const prompt = require("prompt-sync")();

const SOLICITAR_VALOR =
  "Informe um valor para adicionar na media (0 para calcular): ";
const SOLICITAR_PESO = "Informe o peso deste valor (0 para calcular): ";
const ERRO = "Operação Inválida";
let mediaFinal = 0;
let somaPesos = 0;
let valor = 1;
let peso = 1;

while (!!valor && !!peso && !isNaN(valor) && !isNaN(peso)) {
  valor = parseFloat(prompt(SOLICITAR_VALOR));
  while (!!valor) {
    peso = parseFloat(prompt(SOLICITAR_PESO));
    somaPesos += peso;
    mediaFinal += valor * peso;
    break;
  }
}

mediaFinal = mediaFinal / somaPesos;

while (isNaN(mediaFinal)) {
  console.log(ERRO);
  break;
}
while (!isNaN(mediaFinal)) {
  console.log(mediaFinal);
  break;
}
