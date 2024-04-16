const prompt = require("prompt-sync")();

const SOLICITAR_MACAS = "Informe a quantidade de maçãs que deseja comprar: ";
const MENSAGEM_FINAL = "O valor total da compra é:";
const ERRO_MACAS = "Número de maçãs inválido";
const PRECO_MENOS_QUE_DUZIA = 0.3;
const PRECO_MAIS_QUE_DUZIA = 0.25;
let precoTotal = 0;

let macas = parseInt(prompt(SOLICITAR_MACAS));

if (macas >= 12) {
  precoTotal = macas * PRECO_MAIS_QUE_DUZIA;
} else {
  precoTotal = macas * PRECO_MENOS_QUE_DUZIA;
}

if (macas < 0 || !macas) {
  console.log(ERRO_MACAS);
} else {
  console.log(MENSAGEM_FINAL, precoTotal);
}
