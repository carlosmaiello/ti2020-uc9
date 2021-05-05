/*
   Escreva um algoritmo para ler as dimensões de um 
   retângulo (base e altura), calcular 
   e escrever a área do retângulo
*/

const prompt = require("prompt-sync")();

var base = +prompt("Digite a base (cm): ");
var altura = +prompt("Digite a altura (cm): ");

var area = base * altura;

console.log("O resultado é", area, "cm2");