
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

const n = gets();
let maiorNumeroPar = null;   //quando não temos um valor ele é nulo, porque não existe.
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        //   -->  || ou     maior número par igual nulo -->ou<-- numero maior que par
        if(maiorNumeroPar === null || numero > maiorNumeroPar){
            maiorNumeroPar = numero;
       }
    }else  {
        if(menorNumeroImpar === null || numero < menorNumeroImpar){
        menorNumeroImpar = numero;
       } 
    }
}


print('Maior número par: ' + maiorNumeroPar);
print('Menor número ímpar: ' + menorNumeroImpar);
