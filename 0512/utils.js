function tabuada(numero) {
    console.log("=========");
    console.log("Tabuada do " + numero);
    for (var c = 1; c <= 10; c++) {
        console.log(numero, " X ", c, " = ", (numero * c));
    }
}

function saudacao(nome) {
    console.log("Bom dia " + nome);
}

function imprime10() {
    console.log("Número crescente");
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}

module.exports = { saudacao, imprime10, tabuada }