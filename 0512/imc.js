const prompt = require("prompt-sync")();

function imc(peso, altura) {    
    return peso / (altura ** 2);
}

var peso = +prompt("Digite seu peso: ");
var altura = +prompt("Digite sua altura: ");

console.log("Seu imc é", imc(peso, altura));

var imc2 = imc(80, 1.74);
console.log("O imc fixo é", imc2);

