const prompt = require("prompt-sync")();

var idade = +prompt("Digite sua idade: ");

if (idade >= 18) {
    var nome = prompt("Qual o seu nome? ");
    console.log("Seja bem vindo", nome, "!");
} 
else {
    console.log("Você não pode acessar este conteúdo!");
}
