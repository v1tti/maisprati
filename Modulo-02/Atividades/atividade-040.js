function resultadoLoto() {
  let resultadoOficial = [1, 3, 4, 7, 8];

  let apostasFeitas = [];
  for (let index = 0; index < 50; index++) {
    let conjuntoDeNumeros = [];
    for (let numeros = 0; numeros < 5; numeros++) {
      let numeroAleatorio = 0;
      do {
        numeroAleatorio = Math.floor(Math.random() * 10);
      } while (conjuntoDeNumeros.includes(numeroAleatorio));
      conjuntoDeNumeros.push(numeroAleatorio);
    }
    apostasFeitas.push(conjuntoDeNumeros.sort((a, b) => a - b));
  }
  let contadorAposta = 0;
  apostasFeitas.forEach((aposta) => {
    contadorAposta++;
    if (resultadoOficial.join(",") == aposta.join(",")) {
      console.log("Ganhador");
      console.log(
        `A aposta de numero: ${contadorAposta} teve resultado igual ao oficial`
      );
    }
  });
  return;
}
module.exports = resultadoLoto;
