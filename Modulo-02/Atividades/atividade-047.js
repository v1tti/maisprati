function receberCheats() {
  let atributosPersonagem = {
    nivel: 49,
    vida: 80,
    estamina: 50,
    velocidade: 49,
    ataque: 82,
    defesa: 30,
  };
  let personagemCheatado = {};
  let personagemNerfado = {};
  personagemCheatado = cheatExagerado(atributosPersonagem);
  personagemNerfado = nerfarPersonagem(atributosPersonagem);

  console.log("Personagem normal: ");
  console.log(atributosPersonagem);

  console.log("Personagem cheatado: ");
  console.log(personagemCheatado);

  console.log("Personagem nerfado: ");
  console.log(personagemNerfado);

  return;
}
function cheatExagerado(objeto) {
  let atributosCheatados = {};
  for (atributo in objeto) {
    atributosCheatados[atributo] = objeto[atributo] * 99;
  }
  return atributosCheatados;
}
function nerfarPersonagem(objeto) {
  let atributosNerfados = {};
  for (atributo in objeto) {
    atributosNerfados[atributo] = Math.floor(objeto[atributo] / 10);
  }
  return atributosNerfados
}
module.exports = receberCheats;
