/**
 * 

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do Etanol;
2 - Preço da gasolina;
3 - o tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em KM da viagem;

//imprima no console o valor que será gasto para realizar esta viagem.  
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitro = 10;
const DistanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = DistanciaEmKm / KmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log("este é o preço do Etanol")
    console.log(valorGasto.toFixed(2))
    
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log("Este é o preço da gasolina ")
    console.log(valorGasto.toFixed(2))
    
}










