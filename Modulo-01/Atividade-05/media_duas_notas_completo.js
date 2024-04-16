const prompt = require("prompt-sync")();

const SOLICITAR_NOTA_UM = "Informe a nota do primeiro semestre: ";
const SOLICITAR_NODA_DOIS = "Informe a nota do segundo semestre: ";
const MENSAGEM_APROVADO = "PARABÉNS! Você foi aprovado";
const MENSAGEM_REPROVADO = "Você foi REPROVADO! Estude mais";
const MENSAGEM_ERRO = "Operação Inválida";
let mediaFinal = 0;

let notaUm = parseInt(prompt(SOLICITAR_NOTA_UM));
let notaDois = parseInt(prompt(SOLICITAR_NODA_DOIS));

mediaFinal = (notaUm + notaDois) / 2;

if (notaUm < 0 || notaDois < 0 || isNaN(mediaFinal)) {
  console.log(MENSAGEM_ERRO);
} else if (mediaFinal >= 6) {
  console.log(MENSAGEM_APROVADO);
} else {
  console.log(MENSAGEM_REPROVADO);
}
