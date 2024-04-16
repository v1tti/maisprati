const prompt = require("prompt-sync")();

const SOLICITAR_NUMERO = "Informe um número: ";
const VALOR_PAR = "Valor informado é par";
const VALOR_IMPAR = "Valor informado é ímpar";
const ERRO = "Número Inválido";
let numero = 0;

do {
  numero = parseInt(prompt(SOLICITAR_NUMERO));

  if (isNaN(numero)) {
    console.log(ERRO);
  } else if (numero % 2 === 0) {
    console.log(VALOR_PAR);
  } else {
    console.log(VALOR_IMPAR);
  }
} while (numero > 0 || isNaN(numero));
