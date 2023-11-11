/* 
    Faça um programa para calcular o valor de uma viagem.

    você terá 3 variáveis. Sendo elas:
    1- Preço do combustível;
    2- Gasto médio de combustível do carro por KM;
    3- Distância em KM da viagem;


*/
const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log("litros consumidos:",  litrosConsumidos);

console.log("valor gasto : ",   valorGasto)