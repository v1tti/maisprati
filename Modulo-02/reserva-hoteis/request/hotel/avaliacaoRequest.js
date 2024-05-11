const prompt = require("prompt-sync")();

function avaliacaoRequest() {
  const idHotel = parseInt(prompt("Informe o id do hotel para a avaliação: "));
  const nota = parseInt(prompt("Informe a nota dada para o hotel: "));
  const nome = prompt("Informe o nome de quem está avaliando o hotel: ");
  const comentario = prompt("Escreva um comentario sobre o hotel se desejar: ");

  return { idHotel: idHotel, nota: nota, nome: nome, comentario: comentario };
}
module.exports = avaliacaoRequest;
