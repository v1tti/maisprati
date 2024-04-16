const prompt = require("prompt-sync")();

const SOLICITAR_NUMERO = "Informar número para ser repetido dez vezes: ";
const ERRO = "Número Inválido";

let numero = parseInt(prompt(SOLICITAR_NUMERO));

if (isNaN(numero)) {
  console.log(ERRO);
} else {
  for (let index = 0; index < 10; index++) {
    console.log(numero);
  }
}
