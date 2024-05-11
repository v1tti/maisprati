const { error } = require("console");
const fs = require("fs");
const path = require("path");

function listarReservas() {
  const reservaFilePath = path.join(__dirname, "../reservas/", `reservas.json`);
  const hotelFilePath = path.join(__dirname, "../hoteis/", `hoteis.json`);
  let reservas = [];

  try {
    const jsonData = fs.readFileSync(reservaFilePath);
    const reservasJson = JSON.parse(jsonData);
    reservas = reservasJson;
    if (reservas.length < 1) {
      return "\nDesculpe, nao foi encontrada nenhuma reserva no momento :(\n";
    }
  } catch (error) {
    console.log(error);

    throw error;
  }

  try {
    const jsonData = fs.readFileSync(hotelFilePath);
    const hoteis = JSON.parse(jsonData);

    reservas.forEach((reserva) => {
      let hotelDaReserva = hoteis.find((hotel) => hotel.id == reserva.idHotel);
      reserva.hotelDetalhes = hotelDaReserva;
    });
  } catch (error) {
    console.log(error);

    throw error;
  }

  return reservas;
}
module.exports = listarReservas;
