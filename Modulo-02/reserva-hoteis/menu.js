const prompt = require("prompt-sync")();
const adicionarHotel = require("./funcionalidades/adicionarHotel");
const adicionarReserva = require("./funcionalidades/adicionarReserva");
const buscarHotelPorCidade = require("./funcionalidades/buscarHoteis");
const cancelarReserva = require("./funcionalidades/cancelarReserva");
const listarReservas = require("./funcionalidades/listarReservas");

function menuHotel() {
  let programaDeveRodar = true;

  while (programaDeveRodar) {
    console.log("Bem-vindo, informe a opção desejada: ");
    console.log(
      "1-Adicionar Hotel\n2-Adicionar Reserva\n3-Buscar Hoteis\n4-Cancelar Reserva\n5-Listar Reservas\n0-Sair\n"
    );
    let digitoInformado = parseInt(prompt());
    switch (digitoInformado) {
      case 1:
        let nomeHotel = prompt("Informe o nome do hotel para adicionar: ");
        let cidadeHotel = prompt("Informe a cidade do hotel: ");
        let quartosHotel = parseInt(
          prompt("Informe o numero de quartos do hotel: ")
        );

        console.log(adicionarHotel(nomeHotel, cidadeHotel, quartosHotel));

        break;
      case 2:
        let idHotel = parseInt(
          prompt(
            "Informe o id do hotel para realizar a reserva (Voce pode encontrar o id do hotel buscando hoteis por cidade): "
          )
        );
        let nomeCliente = prompt("Informe o nome para a reserva: ");

        console.log(adicionarReserva(idHotel, nomeCliente));

        break;
      case 3:
        let cidade = prompt(
          "Informe a cidade para buscar todos os hoteis dela: "
        );

        console.log(buscarHotelPorCidade(cidade));

        break;
      case 4:
        let idHotelReserva = parseInt(
          prompt("Informe o id do hotel para cancelar a reserva: ")
        );
        let nomeReserva = prompt("Informe o nome do cliente desta reserva: ");

        cancelarReserva(idHotelReserva, nomeReserva);

        break;
      case 5:
        console.log(listarReservas());

        break;
      default:
        if (digitoInformado == 0) programaDeveRodar = false;
        break;
    }
  }
}
menuHotel();
