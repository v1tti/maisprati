function lojasDiferentes() {
  let inventarioLojaA = { boneca: 3, carrinho: 1, bola: 9 };
  let inventarioLojaB = { boneca: 1, garrafa: 4, bola: 2, tapete: 5 };
  let inventarioCombinado = {};

  inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);

  console.log(inventarioCombinado);
}
function combinarInventarios(inventarioLojaA, inventarioLojaB) {
  let inventarioCombinado = { ...inventarioLojaA };

  for (let item in inventarioLojaB) {
    if (inventarioCombinado[item]) {
      inventarioCombinado[item] += inventarioLojaB[item];
    } else {
      inventarioCombinado[item] = inventarioLojaB[item];
    }
  }
  return inventarioCombinado;
}
module.exports = lojasDiferentes;
