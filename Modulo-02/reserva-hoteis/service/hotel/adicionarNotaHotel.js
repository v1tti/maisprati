const fs = require("fs");
const path = require("path");

function adicionarNota({ idHotel, nota, nome, comentario }) {
  if (idHotel == 0) {
    return "\nOperação cancelada!\n";
  }
  const hotelFilePath = path.join(__dirname, "../../hoteis/", `hoteis.json`);
  const avaliacao = { nome: nome, nota: nota, comentario: comentario };

  try {
    const jsonData = fs.readFileSync(hotelFilePath);
    const hoteis = JSON.parse(jsonData);
    let hotelParaDarNota = hoteis.find((hotel) => hotel.id === idHotel);

    if (!hotelParaDarNota) return "\nNão foi encontrado hotel com este id :(\n";
    if (!hotelParaDarNota.avaliacoes) hotelParaDarNota.avaliacoes = [];

    hotelParaDarNota.avaliacoes.push(avaliacao);
    const data = JSON.stringify(hoteis);

    fs.writeFileSync(hotelFilePath, data);
  } catch (error) {
    console.log(error);

    throw error;
  }

  return "\nAvaliação registrada com sucesso!\n";
}
module.exports = adicionarNota;
