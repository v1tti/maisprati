const prompt = require("prompt-sync")();
const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function registroFuncionarios() {
  let registro = [];
  let funcionario = {};

  funcionario.nome = prompt("Informe o nome do funcionario: ");
  funcionario.cargo = prompt("Informe o cargo do funcionario: ");
  funcionario.salario = parseFloat(
    prompt("Informe o salario do funcionario: ")
  );
  if (valorVazioOuIsNan(funcionario.salario))
    funcionario.salario = pedirValorAteVirFloat(funcionario.salario);

  registro.push(funcionario);

  registro.forEach((funcionario) => {
    console.log(
      `Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salario: R$ ${funcionario.salario}`
    );
  });
}
module.exports = registroFuncionarios;
