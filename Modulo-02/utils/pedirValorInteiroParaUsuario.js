const prompt = require("prompt-sync")();

function pedirValorInteiroParaUsuario() {
  let valor = parseInt(prompt("Informe um numero inteiro: "));
  return valor;
}

module.exports = pedirValorInteiroParaUsuario;
