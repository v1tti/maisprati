function transacoesFinanceiras() {
  let transacoes = [
    { id: 1, valor: 150, data: "11-02-24", categoria: "lazer" },
    { id: 2, valor: 250, data: "10-02-24", categoria: "assinatura" },
    { id: 3, valor: 10, data: "12-06-22", categoria: "comida" },
    { id: 4, valor: 100, data: "11-02-21", categoria: "comida" },
    { id: 5, valor: 20, data: "23-05-23", categoria: "assinatura" },
    { id: 6, valor: 30, data: "01-03-99", categoria: "transporte" },
  ];
  let transacoesPorCategoria = [];
  transacoesPorCategoria = organizarTransacoes(transacoes);

  console.log(transacoesPorCategoria);

  return;
}
function organizarTransacoes(arrayDeObjetos) {
  let transacoesOrganizadas = {};
  transacoesOrganizadas = arrayDeObjetos.reduce((acumulador, atual) => {
    if (acumulador[atual.categoria]) {
      acumulador[atual.categoria].subtotal += atual.valor;
    } else {
      acumulador[atual.categoria] = [];
      acumulador[atual.categoria].subtotal = atual.valor;
    }
    acumulador[atual.categoria].push(atual);

    return acumulador;
  }, {});
  return transacoesOrganizadas;
}
module.exports = transacoesFinanceiras;
