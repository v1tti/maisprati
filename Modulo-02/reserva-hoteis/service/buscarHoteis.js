const { error } = require("console");
const fs = require("fs");
const path = require("path");

function buscarHotelPorCidade(cidade) {
  if (cidade == 0) {
    return;
  }
  let hoteisBuscados = [];
  const filePath = path.join(__dirname, "../hoteis/", `hoteis.json`);
  try {
    const jsonData = fs.readFileSync(filePath);
    const hoteis = JSON.parse(jsonData);
    hoteisBuscados = hoteis.filter(
      (hotel) => hotel.cidade.toLocaleLowerCase() == cidade.toLocaleLowerCase()
    );
    if (hoteisBuscados.lenght < 1) {
      return "\nNenhum hotel encontrado com este nome :(\n";
    }
  } catch (error) {
    console.log(error);

    throw error;
  }

  return hoteisBuscados;
}

function buscarHotelPorId(id) {
  let hotelEncontrado = [];
  const filePath = path.join(__dirname, "../hoteis", `hoteis.json`);
  try {
    const jsonData = fs.readFileSync(filePath);
    const hoteis = JSON.parse(jsonData);
    hotelEncontrado = hoteis.find((hotel) => hotel.id == id);
    if (!hotelEncontrado) return "Nenhum hotel encontrado com o id informado";
  } catch (error) {
    console.log(error);
  }

  return hotelEncontrado;
}
module.exports.buscarHotelPorCidade = buscarHotelPorCidade;
module.exports.buscarHotelPorId = buscarHotelPorId;
