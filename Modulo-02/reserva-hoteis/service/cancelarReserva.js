const { error } = require("console");
const fs = require("fs");
const path = require("path");

function cancelarReserva(idHotel, nomeCliente) {
  if (idHotel == 0) {
    return "\nOperação cancelada!\n";
  }
  let reserva = {};
  reserva.idHotel = idHotel;
  reserva.nomeCliente = nomeCliente.toLocaleLowerCase();
  const reservaFilePath = path.join(__dirname, "../reservas/", `reservas.json`);
  const hotelFilePath = path.join(__dirname, "../hoteis/", `hoteis.json`);

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

  return "\nA reserva foi cancelada com sucesso!\n";
}
module.exports = cancelarReserva;
