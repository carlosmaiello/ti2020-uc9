
function saudacao(nome) {
    console.log("Bom dia " + nome);
}

function imprime10() {
    console.log("Número crescente");
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}

/*
saudacao("Carlos");
saudacao("José");
saudacao("Paulo");
saudacao("Marcos");
saudacao("Gabriela");

imprime10();
*/

function tabuada(numero) {
    console.log("=========");
    console.log("Tabuada do " + numero);
    for (var c = 1; c <= 10; c++) {
        console.log(numero, " X ", c, " = ", (numero * c));
    }
}

const prompt = require("prompt-sync")();

var t = prompt("Digite a tabuada que deseja ver: ");

tabuada(t);
