function pessoaNomeIdade() {
  let pessoa = { nome: "Shrek", idade: 30 };

  console.log(`Idade: ${pessoa.idade}`);

  pessoa.email = "shrekverde@gmail.com";

  console.log(
    `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Email: ${pessoa.email}`
  );
}
module.exports = pessoaNomeIdade;
