const prompt = require("prompt-sync")();

const SOLICITACAO_DE_TEMPERATURA = "Informe uma temperatura em graus Celcius: ";
const MENSAGEM_APOS_CONVERSAO = "Sua temperatura em Fahrenheit é:";
const MENSAGEM_ERRO = "Operação inválida";
const COEFICIENTE_MULTIPLICACAO_PARA_FAHRENHEIT = 1.8;
const COEFICIENTE_SOMA_PARA_FAHRENHEIT = 32;
let temperaturaEmFahrenheit = 0;

let temperaturaEmCelcius = parseInt(prompt(SOLICITACAO_DE_TEMPERATURA));

temperaturaEmFahrenheit =
  temperaturaEmCelcius * COEFICIENTE_MULTIPLICACAO_PARA_FAHRENHEIT +
  COEFICIENTE_SOMA_PARA_FAHRENHEIT;

if (isNaN(temperaturaEmCelcius)) {
  console.log(MENSAGEM_ERRO);
} else {
  console.log(MENSAGEM_APOS_CONVERSAO, temperaturaEmFahrenheit);
}
