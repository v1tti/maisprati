const { error } = require("console");
const fs = require("fs");
const path = require("path");

function adicionarReserva(idHotel, nomeCliente) {
  if (idHotel == 0) {
    return "\nOperação cancelada!\n";
  }
  let reserva = {};
  reserva.idHotel = idHotel;
  reserva.nomeCliente = nomeCliente.toLocaleLowerCase();

  const hotelFilePath = path.join(__dirname, "../../hoteis/", `hoteis.json`);
  try {
    const jsonData = fs.readFileSync(hotelFilePath);
    const hoteis = JSON.parse(jsonData);
    let hotelParaAlterar = hoteis.find((hotel) => hotel.id === idHotel);
    if (hotelParaAlterar.quartosDisponiveis == 0) {
      return "\nDesculpe, o hotel nao possui quartos disponiveis :(\n";
    }

    hotelParaAlterar.quartosDisponiveis--;
    const data = JSON.stringify(hoteis);

    fs.writeFileSync(hotelFilePath, data);
  } catch (error) {
    console.log(error);

    throw error;
  }

  const filePath = path.join(__dirname, "../../reservas/", `reservas.json`);
  try {
    const jsonData = fs.readFileSync(filePath);
    const reservas = JSON.parse(jsonData);
    const maiorId = [...reservas].reduce((reservaComMaiorId, reservaAtual) => {
      return reservaComMaiorId.id > reservaAtual.id
        ? reservaComMaiorId
        : reservaAtual;
    });
    reserva.id = maiorId.id + 1;
    reservas.push(reserva);
    const data = JSON.stringify(reservas);

    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error);

    throw error;
  }

  return "\nReserva realizada com sucesso!\n";
}
module.exports = adicionarReserva;
