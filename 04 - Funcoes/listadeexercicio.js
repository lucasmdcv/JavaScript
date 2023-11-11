/** Eabore um algoritmo que calcule o que deve ser pago por um 
 * produto, considerando o preço normal de etiqueta
 *  e a escolha da condição de pagamento.
 * Código Condição de pagamento:
 * - à vista debito, recebe 10 % de desconto;
 * a vista no dinheiro ou pix, recebe 15% de desconto;
 * em duas vezes, preço normal de etiqueta sem jurus;
 * Acima de duas vezes, preço normal de etiqueta mais juros de 10% 
 * 
 */

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto /100)));
}

function aplicarJuros(valor,juros){
    return (valor + ( valor +(juros /100)))
}

const precoEtiqueta = 100;
const formadePagamento = 4;


if (formadePagamento === 1) {

    console.log('valor com 10% de desconto =  R$', aplicarDesconto( precoEtiqueta, 10));
} else if (formadePagamento === 2) {
    
    console.log('valor com 15% de desconto =  R$', aplicarDesconto - (precoEtiqueta * 15));
} else if (formadePagamento === 3) {

    console.log(precoEtiqueta );
} else {
    console.log(aplicarJuros (precoEtiqueta , 10));
}
