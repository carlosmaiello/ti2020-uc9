/**
 * Este algoritmo verifica se o número é primo
 * 
 *  * * *     *
 *  1 2 3 4 5 6
 * 
 *  *       * 
 *  1 2 3 4 5
 * 
 *  * *
 *  1 2
 * 
 *  *   *
 *  1 2 3
 * 
 * 
 * Teste de Mesa
 * =============
 * n   qtde    c       console
 * 5   0       5       É número primo
 *     1       4
 *     2       3
 *             2
 *             1
 *             0
 * 
 */

const prompt = require("prompt-sync")();

console.log("Verificar se é primo");
var n = +prompt("Digite o número: ");

var qtde = 0;

for (var c = n; c >= 1; c--) {
    if (n % c == 0) { 
        qtde++;       
    }
}

if (qtde == 2) {
    console.log("O Número é primo");
}
else {
    console.log("O Número não é primo");
}

