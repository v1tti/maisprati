const { error } = require("console");
const fs = require("fs");
const path = require("path");
const { buscarHotelPorId } = require("./buscarHoteis");
const ocupacoesHotel = require("../../response/hotel/ocupacoesHotel");

function mostrarOcupacoesHotel(idHotel) {
  if (idHotel == 0) {
    return "\nOperação cancelada!\n";
  }
  let hotelBuscado = buscarHotelPorId(idHotel);
  let checkins = [];
  const checkinFilePath = path.join(__dirname, "../../hoteis", `checkins.json`);
  try {
    const jsonData = fs.readFileSync(checkinFilePath);
    let checkinsEncontrados = JSON.parse(jsonData);
    checkins = checkinsEncontrados.filter(
      (checkin) => checkin.idHotel == idHotel
    );
    if (checkins.lenght < 1) {
      return "\nNenhum checkin encontrado para o hotel com este id :(\n";
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return ocupacoesHotel({ nomeHotel: hotelBuscado.nome, historico: [checkins] });
}
module.exports = mostrarOcupacoesHotel;
