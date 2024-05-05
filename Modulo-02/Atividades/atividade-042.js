function dadosVariasPropriedades() {
  dados = {
    nome: "Pepe",
    fotos: ["urlfoto1", "urlfoto2", "urlfoto3"],
    telefones: ["53984366968", "5332352839"],
    animalFavorito: "sapo",
    idade: 30,
  };
  vetoresDoObjeto(dados);
}
function vetoresDoObjeto(objeto) {
  for (const propriedade in objeto) {
    if (Array.isArray(objeto[propriedade])) {
      console.log(objeto[propriedade]);
    }
  }
  return;
}
module.exports = dadosVariasPropriedades;
