
const prompt = require('prompt-sync')();

var qtde = +prompt("Quantas maçãs deseja comprar? ");
/*
var total = qtde < 12 ? qtde * 1.3 : qtde * 1;
console.log("O valor total é ", total);

ou

var total = qtde * (qtde < 12 ? 1.3 : 1);
console.log("O valor total é ", total);
*/
console.log("O valor total é ", qtde * (qtde < 12 ? 1.3 : 1));