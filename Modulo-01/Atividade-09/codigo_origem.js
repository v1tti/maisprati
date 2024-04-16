const prompt = require("prompt-sync")();

const SOLICITAR_CODIGO = "Informe o código de origem do produto: ";
const ERRO = "Código Inválido";
let = regiaoOrigem = "";

let codigoOrigem = parseInt(prompt(SOLICITAR_CODIGO));

switch (codigoOrigem) {
  case 1:
    regiaoOrigem = "Sul";
    break;
  case 2:
    regiaoOrigem = "Norte";
    break;
  case 3:
    regiaoOrigem = "Leste";
    break;
  case 4:
    regiaoOrigem = "Oeste";
    break;
  case 5 || 6:
    regiaoOrigem = "Nordeste";
  case 7 || 8 || 9:
    regiaoOrigem = "Sudeste";
  default:
    if (codigoOrigem >= 10 && codigoOrigem <= 20) {
      regiaoOrigem = "Centro-Oeste";
    } else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
      regiaoOrigem = "Nordeste";
    } else if (!codigoOrigem || isNaN(codigoOrigem)) {
      regiaoOrigem = ERRO;
    } else {
      regiaoOrigem = "Importada";
    }
}

console.log(regiaoOrigem);
