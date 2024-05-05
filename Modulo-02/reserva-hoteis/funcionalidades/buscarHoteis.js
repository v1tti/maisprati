const { error } = require("console");
const fs = require("fs");
const path = require("path");

function buscarHotelPorCidade(cidade) {
  let hoteisBuscados = [];
  const filePath = path.join(__dirname, "../hoteis/", `hoteis.json`);
  try {
    const jsonData = fs.readFileSync(filePath);
    const hoteis = JSON.parse(jsonData);
    hoteisBuscados = hoteis.filter(
      (hotel) => hotel.cidade.toLocaleLowerCase() == cidade.toLocaleLowerCase()
    );
    if (hoteisBuscados.lenght < 1) {
      return "Nenhum hotel encontrado com este nome :(";
    }
  } catch (error) {
    console.log(error);

    throw error;
  }

  return hoteisBuscados;
}
module.exports = buscarHotelPorCidade;
