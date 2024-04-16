const prompt = require("prompt-sync")();

const SOLICITAR_LADO_UM = "Informe o primeiro lado do triângulo: ";
const SOLICITAR_LADO_DOIS = "Informe o segundo lado do triângulo: ";
const SOLICITAR_LADO_TRES = "Informe o terceiro lado do triângulo: ";
const MENSAGEM_FINAL = "O triângulo informado é:";
const ERRO_TRIANGULO =
  "Não é possível formar um triângulo com os lados informados";
let tipoTriangulo = "";

let ladoUm = parseInt(prompt(SOLICITAR_LADO_UM));
let ladoDois = parseInt(prompt(SOLICITAR_LADO_DOIS));
let ladoTres = parseInt(prompt(SOLICITAR_LADO_TRES));

if (
  ladoUm < ladoDois + ladoTres &&
  ladoDois < ladoUm + ladoTres &&
  ladoTres < ladoUm + ladoDois
) {
  if (ladoUm === ladoDois && ladoDois === ladoTres) {
    tipoTriangulo = "Equilátero";
  } else if (ladoUm !== ladoDois && ladoDois !== ladoTres) {
    tipoTriangulo = "Escaleno";
  } else {
    tipoTriangulo = "Isóceles";
  }
  console.log(MENSAGEM_FINAL, tipoTriangulo);
} else {
  console.log(ERRO_TRIANGULO);
}
