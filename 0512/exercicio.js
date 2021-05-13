function calculo(num1, op, num2) {
    var res = 0;

    if (op == "+") {
        res = num1 + num2;
    }
    else if (op == "-") {
        res = num1 - num2;
    }
    else if (op == "*") {
        res = num1 * num2;
    }
    else if (op == "/") {
        res = num1 / num2;
    }

    return res;
}

var soma = calculo(10, "+", 20);
var sub = calculo(10, "-", 20);
var multi = calculo(10, "*", 20);
var div = calculo(10, "/", 20);

console.log(soma);
console.log(sub);
console.log(multi);
console.log(div);


