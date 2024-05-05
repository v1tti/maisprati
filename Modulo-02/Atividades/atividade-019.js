const prompt = require("prompt-sync")();

function horarios() {
  let horarios = [];
  let minuto;
  let hora;
  let segundo;

  while (horarios.length < 5) {
    horarios.push(prompt("Informe um horario em formato HH.MM.SS: "));
  }

  horarios.forEach((horario) => {
    if (horario.length != 8 || horario.split(".").length - 1 !== 2) {
      horarioInvalido(horario);
    } else {
      horarioSeparado = horario.split(".");
      hora = parseInt(horarioSeparado[0]);
      minuto = parseInt(horarioSeparado[1]);
      segundo = parseInt(horarioSeparado[2]);

      if (horaMinutoOuSegundoInvalido(hora, minuto, segundo))
        horarioInvalido(horario);
      else {
        console.log(`Horario valido: ${horario}`);
      }
    }
  });
  return;
}
function horarioInvalido(horario) {
  console.log(`Horario invalido: ${horario}`);
}
function horaMinutoOuSegundoInvalido(hora, minuto, segundo) {
  if (
    isNaN(hora) ||
    hora == "" ||
    isNaN(minuto) ||
    minuto == "" ||
    isNaN(segundo) ||
    segundo == ""
  )
    return true;
  if (
    hora > 23 ||
    hora < 0 ||
    minuto < 0 ||
    minuto > 59 ||
    segundo < 0 ||
    segundo > 59
  )
    return true;
  return false;
}
module.exports = horarios;
