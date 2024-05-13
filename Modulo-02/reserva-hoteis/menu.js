const prompt = require("prompt-sync")();
const avaliacaoRequest = require("./request/hotel/avaliacaoRequest");
const adicionarCheckIn = require("./service/checkin/adicionarCheckIn");
const adicionarCheckOut = require("./service/checkin/adicionarCheckOut");
const adicionarHotel = require("./service/hotel/adicionarHotel");
const adicionarReserva = require("./service/reserva/adicionarReserva");
const { buscarHotelPorCidade } = require("./service/hotel/buscarHoteis");
const cancelarReserva = require("./service/reserva/cancelarReserva");
const listarReservas = require("./service/reserva/listarReservas");
const adicionarNota = require(`./service/hotel/adicionarNotaHotel`);
const ocupacaoRequest = require("./request/hotel/ocupacaoRequest");
const mostrarOcupacoesHotel = require("./service/hotel/mostrarOcupacoesHotel");

function menuHotel() {
  let programaDeveRodar = true;
  console.log("\nBem-vindo, informe a opção desejada: \n");
  while (programaDeveRodar) {
    mostrarOpcoes();
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
      case 8:
        mostrarOcupacoesHotel(ocupacaoRequest());
        break;
      case 9:
        console.log(adicionarNota(avaliacaoRequest()));
        break;
      default:
        if (digitoInformado == 0) programaDeveRodar = false;
        break;
    }
  }
}
function mostrarOpcoes() {
  console.log("🏩  1-Adicionar hotel no sistema");
  console.log("✍   2-Adicionar reserva no sistema");
  console.log("🔎  3-Buscar hoteis");
  console.log("❌  4-Cancelar reserva");
  console.log("👀  5-Listar reservas");
  console.log("✔   6-Fazer Check-in");
  console.log("✔   7-Fazer Check-out");
  console.log("🕑  8-Historico de ocupações do hotel");
  console.log("⭐  9-Avaliar hotel");
  console.log("📴  0-Sair");
  console.log("\n");
}
menuHotel();
