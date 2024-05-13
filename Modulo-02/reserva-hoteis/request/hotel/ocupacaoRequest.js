const prompt = require("prompt-sync")();

function ocupacaoRequest() {
  const idHotel = parseInt(prompt("Informe o id do hotel para o historico: "));

  return idHotel;
}
module.exports = ocupacaoRequest;
