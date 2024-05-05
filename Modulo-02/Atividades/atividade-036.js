function loteriaEsportiva() {
  let gabarito = [22, 33, 70, 89, 11, 1, 2, 3, 4, 10, 12, 15, 13];

  let apostadores = [
    {
      cartao: 118338,
      respostas: [33, 22, 70, 89, 11, 1, 2, 3, 4, 10, 12, 13, 15],
    },
  ];

  for (let i = 0; i < 99; i++) {
    apostadores.unshift({
      cartao: gerarNumeroAleatorio(),
      respostas: gerarRespostasAleatorias(),
    });
  }
  gabarito.sort((a, b) => a - b);
  apostadores.forEach((apostador) => {
    let respostas = apostador.respostas.sort((a, b) => a - b);
    if (respostas.join(",") == gabarito.join(",")) {
      console.log(`Parabéns, tu foi o GANHADOR`);
      console.log(`Numero do cartao vencedor: ${apostador.cartao}`);
    }
  });
  return;
}

function gerarNumeroAleatorio() {
  return Math.floor(100000 + Math.random() * 900000);
}

function gerarRespostasAleatorias() {
  let respostas = [];
  for (let i = 0; i < 13; i++) {
    respostas.push(Math.floor(Math.random() * 101));
  }
  return respostas;
}
module.exports = loteriaEsportiva;
