const fs = require("fs");
const path = require("path");
const { buscarHotelPorId } = require("./buscarHoteis");
const erroHotelNaoEncontrado = require("./utils/hotel/errors");

function adicionarCheckIn(idHotel, nomeCliente) {
  let hotelParaCheckIn = {};
  let checkIn = {};
  const filePath = path.join(__dirname, "../hoteis/", `checkins.json`);

  hotelParaCheckIn = buscarHotelPorId(idHotel);
  if (erroHotelNaoEncontrado(hotelParaCheckIn)) return hotelParaCheckIn;

  try {
    const jsonData = fs.readFileSync(filePath);
    const checkins = JSON.parse(jsonData);
    let checkinComMaiorId = 1;
    if (checkins.length > 1) {
      checkinComMaiorId = [...checkins].reduce(
        (checkinComMaiorId, checkinAtual) => {
          return checkinComMaiorId.id > checkinAtual.id
            ? checkinComMaiorId
            : checkinAtual;
        }
      );
    }
    checkIn.id = checkinComMaiorId.id;
    checkIn.idHotel = hotelParaCheckIn.id;
    checkIn.nomeCliente = nomeCliente.toLocaleLowerCase();
    checkIn.dataEntrada = new Date().toLocaleDateString(`pt-BR`);
    checkIn.dataSaida = "Não informado";

    checkins.push(checkIn);
    const data = JSON.stringify(checkins);
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error);
  }
  return "Checkin realizado com sucesso!";
}

module.exports = adicionarCheckIn;
