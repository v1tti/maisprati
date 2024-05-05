const prompt = require("prompt-sync")();

const pedirValorAteVirFloat = require("../utils/pedirValorAteVirFloat");
const valorVazioOuIsNan = require("../utils/valorVazioOuIsNan");

function calculaAluguelCarro() {
  const PRECO_LUXO_EM_REAIS = 150;
  const PRECO_POPULAR_EM_REAIS = 90;
  const MULTIPLICADOR_POPULAR_ATE_CEM_KM = 0.2;
  const MULTIPLICADOR_POPULAR_MAIS_QUE_CEM_KM = 0.1;
  const MULTIPLICADOR_LUXO_ATE_DUZENDOS_KM = 0.3;
  const MULTIPLICADOR_LUXO_MAIS_QUE_DUZENDOS_KM = 0.25;

  let precoFinalAluguel = 0;
  let tipoCarro = parseInt(
    prompt("Informe se seu carro eh (1-Popular|2-De luxo): ")
  );

  while (tipoCarro !== 1 && tipoCarro !== 2) {
    tipoCarro = parseInt("Informe um valor valido (1 ou 2)");
  }
  let quilometrosPercorridos = parseFloat(
    prompt("Informe quantos km foram percorridos: ")
  );

  if (valorVazioOuIsNan(quilometrosPercorridos))
    quilometrosPercorridos = pedirValorAteVirFloat(quilometrosPercorridos);

  let diasUsados = parseFloat(
    prompt("Informe quantos dias o carro foi utilizado: ")
  );

  if (valorVazioOuIsNan(diasUsados))
    diasUsados = pedirValorAteVirFloat(diasUsados);

  if (tipoCarro === 1) {
    if (quilometrosPercorridos <= 100) {
      precoFinalAluguel =
        PRECO_POPULAR_EM_REAIS * diasUsados +
        MULTIPLICADOR_POPULAR_ATE_CEM_KM * quilometrosPercorridos;
    } else {
      precoFinalAluguel =
        PRECO_POPULAR_EM_REAIS * diasUsados +
        MULTIPLICADOR_POPULAR_MAIS_QUE_CEM_KM * quilometrosPercorridos;
    }
  }
  if (tipoCarro === 2) {
    if (quilometrosPercorridos <= 200) {
      precoFinalAluguel =
        PRECO_LUXO_EM_REAIS * diasUsados +
        MULTIPLICADOR_LUXO_ATE_DUZENDOS_KM * quilometrosPercorridos;
    } else {
      precoFinalAluguel =
        PRECO_LUXO_EM_REAIS * diasUsados +
        MULTIPLICADOR_LUXO_MAIS_QUE_DUZENDOS_KM * quilometrosPercorridos;
    }
  }
  return console.log(`O preco final do seu aluguel eh: ${precoFinalAluguel}`);
}

module.exports = calculaAluguelCarro;
