const prompt = require('prompt-sync')();

var sn = "s";
var n1 = 0;

while (sn == "s") {
    n1 = +prompt("Digite um número: ");
    console.log("Valor X 10 =", n1 * 10);

    do {
        sn = prompt("Digitar novamente (s/n)? ");
    } while (sn != "s" && sn != "n");
}

console.log("SAIU");