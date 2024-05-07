const prompt = require("prompt-sync")();

function folhaMensal() {
  let registro = [];
  preencherComPersonagens(registro);

  console.log(
    "------------------------------------------------------------------------------------------------------------------------"
  );
  console.log(
    "| Matrícula |               Nome               | Salário Bruto | Dedução INSS | Salário Líquido |"
  );
  console.log(
    "------------------------------------------------------------------------------------------------------------------------"
  );
  registro.forEach((funcionario) => {
    funcionario.salarioLiquido =
      funcionario.salarioBruto -
      funcionario.salarioBruto * funcionario.deducaoINSS;
    console.log(
      `| ${funcionario.matricula
        .toString()
        .padEnd(9)} | ${funcionario.nome.padEnd(32)} | ${formatarSalario(
        funcionario.salarioBruto
      ).padEnd(13)} | ${(
        (funcionario.deducaoINSS * 100).toFixed(2) + "%"
      ).padEnd(12)} | ${formatarSalario(funcionario.salarioLiquido).padEnd(
        15
      )} |`
    );
  });
  console.log(
    "------------------------------------------------------------------------------------------------------------------------"
  );
}
function formatarSalario(salario) {
  return salario.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
function preencherComPersonagens(registro) {
  const personagens = [
    "Shrek",
    "Fiona",
    "Burro",
    "Gato de Botas",
    "Biscoito",
    "Dragão",
    "Lorde Farquaad",
    "Pinóquio",
    "Rei Harold",
    "Rainha Lillian",
    "Fada Madrinha",
    "Príncipe Encantado",
    "Rumpelstiltskin",
    "Artie",
    "Capitão Gancho",
    "Peter Pan",
    "Cinderela",
    "Branca de Neve",
    "O Lobo Mau",
    "Ovo",
    "Cíclope",
    "Três Porquinhos",
    "Chapeuzinho Vermelho",
    "João e Maria",
    "Rapunzel",
    "João e o Pé de Feijão",
    "Mamãe Urso",
    "Papai Urso",
    "Bebê Urso",
    "O Patinho Feio",
    "Os Três Ratos Cegos",
    "O Flautista de Hamelin",
    "O Espelho Mágico",
    "As Criaturas de Conto de Fadas",
    "O Homem do Pão",
    "A Rainha Má",
    "O Coelho Branco",
    "O Chapeleiro Maluco",
    "A Lebre de Março",
    "O Valete de Copas",
    "O Gato de Cheshire",
    "A Lagarta",
    "A Rainha de Copas",
    "Os Irmãos Gêmeos Tweedle",
    "A Morsa e o Carpinteiro",
    "O Jabberwocky",
    "O Grifo",
    "A Tartaruga Falsa",
    "A Duquesa",
    "O Rei de Copas",
    "As Flores Falantes",
    "O Rato Dorminhoco",
    "O Pão com Manteiga e Borboletas",
    "A Rainha Branca",
    "A Rainha Vermelha",
    "O Homem de Pé Vermelho",
    "O Homem de Pé Branco",
    "O Mosquito",
    "A Rosa",
    "O Lírio",
    "A Margarida",
    "O Lírio Tigre",
    "A Íris",
    "O Dodô",
    "O Egrégio",
    "O Lorico",
    "O Pato",
    "O Cãozinho",
    "A Mãe do Cãozinho",
    "O Pai do Cãozinho",
    "Os Irmãos e Irmãs do Cãozinho",
    "Os Amigos do Cãozinho",
    "Os Inimigos do Cãozinho",
    "Os Amantes do Cãozinho",
    "Os Rivais do Cãozinho",
    "Os Aliados do Cãozinho",
    "Os Minions do Cãozinho",
    "Os Capangas do Cãozinho",
    "O Chefe do Cãozinho",
    "O Escudeiro do Cãozinho",
  ];
  for (let i = 0; i < 80; i++) {
    registro.push({
      matricula: 118338 + i,
      nome: personagens[i % personagens.length],
      salarioBruto: gerarSalarioBruto(),
      deducaoINSS: 0.12,
    });
  }
}
function gerarSalarioBruto() {
  return Math.floor(Math.random() * (8000 - 3000 + 1)) + 3000;
}
module.exports = folhaMensal;
