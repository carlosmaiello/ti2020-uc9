Lógica Booleana
===============

Tabela Verdade
--------------

E
------------
```
V1  V2  R
F   F   F
F   V   F
V   F   F
V   V   V
```

```
var idade = 17;

if (idade >= 18) { // true ou false
    ...
}


20 <-> 30

idade >= 20 E idade <= 30

var idade = 20;

if (idade >= 20 && idade <= 30) {
    ...
}
```

OU
------------
```
V1  V2  R
F   F   F
V   F   V
F   V   V
V   V   V
```

```
< 20 30 >

idade < 20 OU idade > 30

var idade = 33;

if (idade < 20 || idade > 30) {
    ...    
}

var x = "B";

if (x == "a" || x == "B" || x == "C") {
    ...
}
```

Expressão lógica
----------------
```
var b = true;
var c = false;

var idade = 23;

c = idade == 23;

var z = b && c;

console.log(z);

console.log(!z);
```

Teste de Mesa
--------------
```
b       c      idade    z
true    false  23       true
        true
```

Not
-----
! => Negação

```
if (!z) {
    ...
}
```

Operador Ternário
-----------------
```
var x = 0;

if (x > 0)
    console.log("Valor é", x);
else 
    console.log("Vazio");


console.log(x > 0 ? "Valor é " + x : "Vazio");
```




