const prompt = require("prompt-sync")();

function inverterSeteNomes() {
  let nomes = [];

  while (nomes.length < 7) {
    let nome = prompt("Informe um nome para adicionar no vetor: ");
    nomes.unshift(" " + nome);
  }
  return console.log(`Nomes invertidos: ${nomes}`);
}
module.exports = inverterSeteNomes;
