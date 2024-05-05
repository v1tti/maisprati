const prompt = require("prompt-sync")();
const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");
const pedirValorAteVirInteiro = require("../utils/pedirValorAteVirInteiro");

function folhaMensal() {
  let registro = [];
  let funcionario = {};

  funcionario.matricula = parseInt(
    prompt("Informe a matricula do funcionario: ")
  );
  if (valorVazioOuIsNan(funcionario.matricula))
    funcionario.matricula = pedirValorAteVirInteiro(funcionario.matricula);

  funcionario.nome = prompt("Informe o nome do funcionario: ");
  funcionario.salarioBruto = parseFloat(
    prompt("Informe o salario bruto do funcionario: ")
  );
  if (valorVazioOuIsNan(funcionario.salarioBruto))
    funcionario.salarioBruto = pedirValorAteVirFloat(funcionario.salarioBruto);

  funcionario.deducaoINSS = parseFloat(prompt("Informe a deducao do INSS: "));
  if (valorVazioOuIsNan(funcionario.deducaoINSS))
    funcionario.deducaoINSS = pedirValorAteVirFloat(funcionario.deducaoINSS);

  funcionario.salarioLiquido =
    funcionario.salarioBruto -
    (funcionario.salarioBruto * funcionario.deducaoINSS) / 100;

  registro.push(funcionario);

  registro.forEach((funcionario) => {
    console.log(
      `Matricula: ${funcionario.matricula}\nNome: ${funcionario.nome}\nSalario bruto: R$ ${funcionario.salarioBruto}\nDeducao INSS: ${funcionario.deducaoINSS} %\nSalario liquido: R$ ${funcionario.salarioLiquido}`
    );
  });
}
module.exports = folhaMensal;
