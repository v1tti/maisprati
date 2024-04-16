const prompt = require("prompt-sync")();

const SOLICITAR_PRIMEIRO_INTEIRO = "Informe o primeiro inteiro: ";
const SOLICITAR_SEGUNDO_INTEIRO = "Informe o segundo inteiro: ";
const SOLICITAR_TERCEIRO_INTEIRO = "Informe o terceiro inteiro: ";
const SOLICITAR_QUARTO_INTEIRO = "Informe o quarto inteiro: ";
const MENSAGEM_ERRO = "Operação Inválida";

let inteiroUm = parseInt(prompt(SOLICITAR_PRIMEIRO_INTEIRO));
let inteiroDois = parseInt(prompt(SOLICITAR_SEGUNDO_INTEIRO));
let inteiroTres = parseInt(prompt(SOLICITAR_TERCEIRO_INTEIRO));
let inteiroQuatro = parseInt(prompt(SOLICITAR_QUARTO_INTEIRO));

inteiroQuatro = inteiroUm + inteiroDois + inteiroTres;
inteiroUm += 25;
inteiroDois *= 3;
inteiroTres = inteiroTres * 0.12;

if (isNaN(inteiroQuatro)) {
  console.log(MENSAGEM_ERRO);
} else {
  console.log(inteiroUm);
  console.log(inteiroDois);
  console.log(inteiroTres);
  console.log(inteiroQuatro);
}
