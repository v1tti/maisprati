const prompt = require("prompt-sync")();

const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function mostrarSalarioESexo() {
  let condicaoDeParada = 1;
  let funcionarios = [];
  let salarioHomens = 0;
  let salarioMulheres = 0;
  while (condicaoDeParada === 1) {
    let nome = prompt("Informe o nome do funcionario: ");
    while (!nome) {
      nome = prompt("Informe um nome valido: ");
    }

    let salario = parseFloat(prompt("Informe o salario do funcionario: "));
    if (valorVazioOuIsNan(salario)) salario = pedirValorAteVirFloat(salario);

    let sexo = parseFloat(
      prompt("Informe o sexo do funcionario (1-Homem|2-Mulher): ")
    );
    if (valorVazioOuIsNan(sexo)) sexo = pedirValorAteVirFloat(sexo);
    if (sexo === 1) {
      sexo = "Homem";
      salarioHomens += salario;
    }
    if (sexo === 2) {
      sexo = "Mulher";
      salarioMulheres += salario;
    }

    funcionarios.push({ nome: nome, salario: salario, sexo: sexo });

    condicaoDeParada = parseInt(
      prompt("Deseja informar mais um funcionario? (1-Sim|2-Nao): ")
    );
  }
  funcionarios.forEach((funcionario) => {
    console.log(
      `Nome: ${funcionario.nome}, Salario: R$ ${funcionario.salario}, Sexo: ${funcionario.sexo}`
    );
  });
  console.log(
    `Salario para homens: ${salarioHomens}, salario para mulheres: ${salarioMulheres}`
  );
}

module.exports = mostrarSalarioESexo;
