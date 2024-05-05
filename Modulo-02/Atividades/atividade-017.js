const prompt = require("prompt-sync")();
const pedirValorAteVirInteiro = require("../utils/pedirValorAteVirInteiro");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function lerNoveIdadesMostrarMenores() {
  let pessoas = [];
  let menoresDeIdade = [];
  while (pessoas.length < 9) {
    let nomeParaAdicionar = prompt("Informe o nome da pessoa: ");
    let idadeParaAdicionar = parseInt(prompt("Informe a idade da pessoa: "));
    if (valorVazioOuIsNan(idadeParaAdicionar))
      idadeParaAdicionar = pedirValorAteVirInteiro(idadeParaAdicionar);

    if (idadeParaAdicionar < 18)
      menoresDeIdade.push({
        nome: nomeParaAdicionar,
        idade: idadeParaAdicionar,
      });

    pessoas.push({ nome: nomeParaAdicionar, idade: idadeParaAdicionar });
  }
  console.log("Menores de idade: ");
  menoresDeIdade.forEach((pessoa) => {
    console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}`);
  });
  return;
}
module.exports = lerNoveIdadesMostrarMenores;
