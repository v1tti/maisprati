const { error } = require("console");
const fs = require("fs");
const path = require("path");

function adicionarHotel(nome, cidade, quartos) {
  let hotel = {};
  hotel.nome = nome.toLocaleLowerCase();
  hotel.cidade = cidade.toLocaleLowerCase();
  hotel.quartosTotais = quartos;
  hotel.quartosDisponiveis = quartos;

  const filePath = path.join(__dirname, "../hoteis/", `hoteis.json`);
  try {
    const jsonData = fs.readFileSync(filePath);
    const hoteis = JSON.parse(jsonData);
    hotel.id = hoteis.length + 1;
    hoteis.push(hotel);
    const data = JSON.stringify(hoteis);

    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error);

    throw error;
  }

  return `Hotel adicionado com sucesso: \n${hotel}\n`;
}
module.exports = adicionarHotel;
