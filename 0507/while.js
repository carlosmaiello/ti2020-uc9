const prompt = require('prompt-sync')();

// USANDO CONTADOR
/*
var c = 1;

while (c <= 10) {
    console.log(c);
    c++;
}
*/

// USANDO OUTRO CRITÉRIO DE PARADA
var sn = "s";
var n1 = 0;

while (sn == "s") {
    n1 = +prompt("Digite um número: ");
    console.log("Valor X 10 =", n1 * 10);
    

    while (sn != "s" && sn != "n") {
        sn = prompt("Digitar novamente (s/n)? ");
    }
}

console.log("SAIU");