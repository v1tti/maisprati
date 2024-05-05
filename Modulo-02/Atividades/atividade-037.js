function provaAlunos() {
  let gabarito = [
    "v",
    "v",
    "v",
    "f",
    "f",
    "v",
    "v",
    "v",
    "v",
    "v",
    "v",
    "v",
    "f",
    "f",
    "f",
    "v",
    "v",
    "v",
    "v",
    "v",
    "v",
  ];
  const palavras = ["v", "f"];
  let provas = [];
  let quantidadeDeAlunos = 50;
  for (let index = 0; index < quantidadeDeAlunos; index++) {
    provas[index] = preencherProva(palavras);
  }

  provas.forEach((prova) => {
    let quantidadeQuestoes = 20;
    let acertos = 0;
    for (let index = 0; index < quantidadeQuestoes; index++) {
      if (prova[index] == gabarito[index]) acertos++;
    }
    if (acertos >= 12) console.log("APROVADO");
    else console.log("REPROVADO");
  });
  return;
}

function preencherProva(palaras) {
  let resultado = [];

  for (let index = 0; index < 20; index++) {
    let palavraAleatoria = palaras[Math.floor(Math.random() * palaras.length)];
    resultado.push(palavraAleatoria);
  }
  return resultado;
}
module.exports = provaAlunos;
