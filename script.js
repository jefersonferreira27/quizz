// Exercicio 01//
let indice = 13;
let soma = 0;
let k = 0;

while(k < indice){
    k = k + 1;
    soma = soma + k;
}

console.log(soma);

// Exercicio 02//
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  function verificaFibonacci(num) {
    let fib = fibonacci(num);
    if (fib.includes(num)) {
      console.log(num + " pertence à sequência de Fibonacci.");
    } else {
      console.log(num + " não pertence à sequência de Fibonacci.");
    }
  }
  
  verificaFibonacci(5); // Saída: 5 pertence à sequência de Fibonacci.
  verificaFibonacci(7); // Saída: 7 não pertence à sequência de Fibonacci.
/*Exercicio 03

3) Descubra a lógica e complete o próximo elemento: 

a) 1, 3, 5, 7, _9__
Lógica: pula de 2 em 2.

b) 2, 4, 8, 16, 32, 64, _128___
Lógica: o dobro do número anterior.

c) 0, 1, 4, 9, 16, 25, 36, __49__
Lógica: pula a partir de número ímpares.

d) 4, 16, 36, 64, _100__
Lógica: cada número par é o resultado de um número par, elevado ao quadrado.

e) 1, 1, 2, 3, 5, 8, _13__
Lógica: cada número é a soma dos dois números anteriores.

f) 2,10, 12, 16, 17, 18, 19, _20_ 
Lógica: soma dos alagarismos até o terceiro número, em sequência são os números naturais*/

/*Exercicio 04
4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto? 

R: O carro. Apesar do ponto de chegada ser o mesmo de ambos os veículos, o carro está numa velocidade maior e não tem as paradas de pedágio do caminhão. Consequentemente, o carro chegará mais rápido.

*/

// Exercicio 05//
let novaString = "";
let string = "Esportes"

for(let i = string.length -1; i >= 0; i--){
     novaString += string[i];
}

console.log(string);
console.log(novaString);