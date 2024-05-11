const fs = require("fs");
const path = require("path");
const { buscarHotelPorId } = require("./buscarHoteis");
const erroHotelNaoEncontrado = require("./utils/hotel/errors");

function adicionarCheckOut(idHotel, nomeCliente) {
  if (idHotel == 0) {
    return;
  }
  let hotelParaCheckIn = {};
  let checkIn = {};
  const filePath = path.join(__dirname, "../hoteis/", `checkins.json`);
  const reservaFilePath = path.join(__dirname, "../reservas/", `reservas.json`);
  const hotelFilePath = path.join(__dirname, "../hoteis/", `hoteis.json`);

  hotelParaCheckIn = buscarHotelPorId(idHotel);
  if (erroHotelNaoEncontrado(hotelParaCheckIn)) return hotelParaCheckIn;

  try {
    const jsonData = fs.readFileSync(filePath);
    const checkins = JSON.parse(jsonData);
    checkIn = checkins.find((checkIn) => checkIn.nomeCliente == nomeCliente);

    checkIn.dataSaida = new Date().toLocaleDateString(`pt-BR`);
    const data = JSON.stringify(checkins);
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error);
  }

  try {
    const jsonData = fs.readFileSync(hotelFilePath);
    const hoteis = JSON.parse(jsonData);
    let hotelParaAlterar = hoteis.find((hotel) => hotel.id === idHotel);
    hotelParaAlterar.quartosDisponiveis++;
    const data = JSON.stringify(hoteis);

    fs.writeFileSync(hotelFilePath, data);
  } catch (error) {
    console.log(error);

    throw error;
  }

  try {
    const jsonData = fs.readFileSync(reservaFilePath);
    const reservas = JSON.parse(jsonData);
    let reservaParaAlterar = reservas.find(
      (reserva) =>
        reserva.idHotel == idHotel &&
        reserva.nomeCliente == nomeCliente.toLocaleLowerCase()
    );
    if (!reservaParaAlterar) {
      return "\nDesculpe, nao foi encontrada uma reserva neste hotel com este nome ou id :(\n";
    }
    for (let index = reservas.length - 1; index >= 0; index--) {
      if (
        reservas[index].idHotel == reservaParaAlterar.idHotel &&
        reservas[index].nomeCliente == reservaParaAlterar.nomeCliente
      ) {
        reservas.splice(index, 1);
        const data = JSON.stringify(reservas);

        fs.writeFileSync(reservaFilePath, data);
      }
    }
  } catch (error) {
    console.log(error);

    throw error;
  }
  return "\nCheckout realizado com sucesso!\n";
}

module.exports = adicionarCheckOut;
