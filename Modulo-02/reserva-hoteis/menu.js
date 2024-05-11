const prompt = require("prompt-sync")();
const adicionarCheckIn = require("./service/adicionarCheckIn");
const adicionarCheckOut = require("./service/adicionarCheckOut");
const adicionarHotel = require("./service/adicionarHotel");
const adicionarReserva = require("./service/adicionarReserva");
const { buscarHotelPorCidade } = require("./service/buscarHoteis");
const cancelarReserva = require("./service/cancelarReserva");
const listarReservas = require("./service/listarReservas");

function menuHotel() {
  let programaDeveRodar = true;

  while (programaDeveRodar) {
    console.log("Bem-vindo, informe a opção desejada: ");
    console.log(
      "1-Adicionar Hotel\n2-Adicionar Reserva\n3-Buscar Hoteis\n4-Cancelar Reserva\n5-Listar Reservas\n6-Fazer Check-in\n7-Fazer Check-out\n0-Sair\n"
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

        console.log(cancelarReserva(idHotelReserva, nomeReserva));

        break;
      case 5:
        console.log(listarReservas());

        break;
      case 6:
        let idHotelCheckin = prompt("Informe o id do hotel para o check-in: ");
        let nomeCheckIn = prompt("Informe o nome do cliente para o check-in: ");

        console.log(adicionarCheckIn(idHotelCheckin, nomeCheckIn));
        break;
      case 7:
        let idHotelCheckout = parseInt(
          prompt("Informe o id do hotel para o check-out: ")
        );
        let nomeCheckOut = prompt(
          "Informe o nome do cliente para o check-out: "
        );
        console.log(adicionarCheckOut(idHotelCheckout, nomeCheckOut));
        break;
      default:
        if (digitoInformado == 0) programaDeveRodar = false;
        break;
    }
  }
}
menuHotel();
