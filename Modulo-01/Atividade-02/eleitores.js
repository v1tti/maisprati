const prompt = require("prompt-sync")();

const SOLICITAR_ELEITORES_TOTAL = "Informe a quantidade de eleitores: ";
const SOLICITAR_VOTOS_BRANCOS = "Informe a quantidade de votos em branco: ";
const SOLICITAR_VOTOS_NULOS = "Informe a quantidade de votos nulos: ";
const SOLICITAR_VOTOS_VALIDOS = "Informe a quantidade de votos válidos: ";
const MENSAGEM_RESULTADO_BRANCOS = "- percentual de votos brancos";
const MENSAGEM_RESULTADO_NULOS = "- percentual de votos nulos";
const MENSAGEM_RESULTADO_VALIDOS = "- percentual de votos válidos";
const MENSAGEM_ERRO = "Operação inválida";
const MENSAGEM_MAIS_VOTOS_QUE_ELEITORES =
  "O total de votos não pode ser maior que o total de eleitores";
let percentualBrancos = 0;
let percentualNulos = 0;
let percentualValidos = 0;

let eleitoresTotal = parseInt(prompt(SOLICITAR_ELEITORES_TOTAL));
let votosBrancos = parseInt(prompt(SOLICITAR_VOTOS_BRANCOS));
let votosNulos = parseInt(prompt(SOLICITAR_VOTOS_NULOS));
let votosValidos = parseInt(prompt(SOLICITAR_VOTOS_VALIDOS));
const TOTAL_VOTOS = votosBrancos + votosNulos + votosValidos;

percentualBrancos = (votosBrancos / eleitoresTotal) * 100;
percentualNulos = (votosNulos / eleitoresTotal) * 100;
percentualValidos = (votosValidos / eleitoresTotal) * 100;

if (
  isNaN(percentualBrancos) ||
  isNaN(percentualNulos) ||
  isNaN(percentualValidos)
) {
  console.log(MENSAGEM_ERRO);
} else if (TOTAL_VOTOS > eleitoresTotal) {
  console.log(MENSAGEM_MAIS_VOTOS_QUE_ELEITORES);
} else {
  console.log(percentualBrancos, MENSAGEM_RESULTADO_BRANCOS);
  console.log(percentualNulos, MENSAGEM_RESULTADO_NULOS);
  console.log(percentualValidos, MENSAGEM_RESULTADO_VALIDOS);
}
