const prompt = require("prompt-sync")();

const SOLICITAR_VALOR_UM = "Informe o primeiro valor: ";
const SOLICITAR_VALOR_DOIS = "Informe o valor dois: ";
const MENSAGEM_FINAL = "O maior valor é:";
const ERRO = "Valor informado inválido";
let resultado = 0;

let numeroUm = parseInt(prompt(SOLICITAR_VALOR_UM));
let numeroDois = parseInt(prompt(SOLICITAR_VALOR_DOIS));

if (numeroUm > numeroDois) {
  resultado = numeroUm;
} else {
  resultado = numeroDois;
}

if (isNaN(numeroUm) || isNaN(numeroDois)) {
  console.log(ERRO);
} else {
  console.log(MENSAGEM_FINAL, resultado);
}
