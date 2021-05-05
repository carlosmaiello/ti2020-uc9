const prompt = require("prompt-sync")();

console.log("ALISTAMENTO MILITAR");
console.log("-------------------");

var idade = +prompt("Digite sua idade: ");

if (idade == 18) {
  console.log("Você precisa se alistar, faça o cadastro.");
  var nome = prompt("Qual seu nome? ");
  var endereco = prompt("Qual seu endereço? ");
  // ...
  console.log("Cadastro realizado com sucesso!");
} else if (idade > 18) {
  console.log(
    "Você não fez o alistamento no prazo. Procure o quartel para se alistar como refratário."
  );
} else {
  console.log("Você não está em idade de alistamento.");
}

console.log("FIM");
