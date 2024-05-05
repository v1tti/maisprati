const prompt = require("prompt-sync")();

const VALOR_SORTEADO = Math.floor(Math.random() * 4) + 1;
const SOLICITAR_TENTATIVA =
  "Informe sua tentativa para adivinhar um valor entre 1 e 5: ";

function jogoValorSorteado() {
  let valorInformado = parseInt(prompt(SOLICITAR_TENTATIVA));

  console.log(`O valor sorteado foi: ${VALOR_SORTEADO}`);
  if (valorInformado === VALOR_SORTEADO)
    return console.log("Parabens, acertou!");
  else return console.log("Voce nao conseguiu acertar o valor informado :(");
}

module.exports = jogoValorSorteado;
