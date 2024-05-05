const prompt = require("prompt-sync")();
const SOLICITAR_JOKENPO =
  "Informe o seu movimento (1-Pedra|2-Papel|3-Tesoura|0-Sair): ";
const INFORME_ESCOLHA_VALIDA = "Informe uma escolha valida";
const GANHOU = "Voce Ganhou!";
const PERDEU = "Voce Perdeu!";
const EMPATE = "Empate!";

function joKenPo() {
  let escolha = parseInt(prompt(SOLICITAR_JOKENPO));
  while (escolha !== 1 && escolha !== 2 && escolha !== 3 && escolha !== 0) {
    escolha = parseInt(prompt(INFORME_ESCOLHA_VALIDA));
  }
  while (escolha !== 0) {
    let escolhaCPU = Math.floor(Math.random() * 3);
    if (escolhaCPU === 1) {
      console.log("A CPU jogou PEDRA");
    }
    if (escolhaCPU === 2) {
      console.log("A CPU jogou PAPEL");
    }
    if (escolhaCPU === 3) {
      console.log("A CPU jogou TESOURA");
    }

    if (escolha === escolhaCPU) console.log(EMPATE);

    switch (escolha) {
      case 1:
        if (escolhaCPU === 2) {
          console.log(PERDEU);
        }
        if (escolhaCPU === 3) {
          console.log(GANHOU);
        }
        break;
      case 2:
        if (escolhaCPU === 1) {
          console.log(GANHOU);
        }
        if (escolhaCPU === 3) {
          console.log(PERDEU);
        }
        break;
      case 3:
        if (escolhaCPU === 1) {
          console.log(PERDEU);
        }
        if (escolhaCPU === 2) {
          console.log(GANHOU);
        }
      default:
        break;
    }
    escolha = parseInt(prompt(SOLICITAR_JOKENPO));
  }
}

module.exports = joKenPo;
