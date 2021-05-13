const prompt = require("prompt-sync")();

function numeroprimo(n) {
  var qtde = 0;

  for (var c = n; c >= 1; c--) {
    if (n % c == 0) {
      qtde++;
    }
  }

  if (qtde == 2) {
    console.log("O Número é primo");
  } else {
    console.log("O Número não é primo");
  }
}


numeroprimo(5);
numeroprimo(6);
numeroprimo(65);
numeroprimo(67);

var num = +prompt("Digite o número: ");
numeroprimo(num);
