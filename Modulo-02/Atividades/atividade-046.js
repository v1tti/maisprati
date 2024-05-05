function objetoVendaValor() {
  let vendasEValores = [
    { vendedor: "Pepe", valor: 150 },
    { vendedor: "Shrek", valor: 100 },
    { vendedor: "Pepe", valor: 50 },
    { vendedor: "Orlando (Florida)", valor: 145 },
    { vendedor: "Shrek", valor: 39 },
  ];
  let valorPorVendedor = [];
  valorPorVendedor = vendasEValores.reduce((acumulador, atual) => {
    if (!acumulador[atual.vendedor]) acumulador[atual.vendedor] = 0;

    acumulador[atual.vendedor] += atual.valor;
    return acumulador;
  }, {});

  for (propriedade in valorPorVendedor) {
    console.log(`${propriedade}: ${valorPorVendedor[propriedade]}`);
  }
  return;
}
module.exports = objetoVendaValor;
