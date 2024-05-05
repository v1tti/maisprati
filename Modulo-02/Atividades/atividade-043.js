function mesclarObjetos() {
  let objetoUm = { nome: "Cleiton", idade: 15 };
  let objetoDois = { nome: "Pepe", pet: "sapo" };
  let objetoMesclado = {};

  objetoMesclado = { ...objetoUm, ...objetoDois };

  for (propriedade in objetoMesclado) {
    console.log(`${propriedade}: ${objetoMesclado[propriedade]}`);
  }
  return;
}
module.exports = mesclarObjetos;
