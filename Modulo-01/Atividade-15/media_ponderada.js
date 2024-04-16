const prompt = require("prompt-sync")();

const SOLICITAR_VALOR =
  "Informe um valor para adicionar na media (0 para calcular): ";
const SOLICITAR_PESO = "Informe o peso deste valor (0 para calcular): ";
let mediaFinal = 0;
let somaPesos = 0;
let valor = 1;
let peso = 0;

while (valor !== 0) {
  valor = parseFloat(prompt(SOLICITAR_VALOR));
  peso = parseFloat(prompt(SOLICITAR_PESO));
  somaPesos += peso;
  mediaFinal += valor * peso;
}

mediaFinal = mediaFinal / somaPesos;

console.log(mediaFinal);
