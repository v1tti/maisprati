const prompt = require("prompt-sync")();

const SOLICITAR_VALOR = "Informe um valor: ";

for (let index = 5; index >= 0; index--) {
  let n = parseInt(prompt(SOLICITAR_VALOR));
  for (let tabuada = 1; tabuada <= n; tabuada++) {
    console.log(`${tabuada} x ${n} = ${n * tabuada}`);
  }
}
