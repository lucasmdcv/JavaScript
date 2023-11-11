/** Eabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
 * Código Condição de pagamento:
 * - à vista debito, recebe 10 % de desconto;
 * a vista no dinheiro ou pix, recebe 15% de desconto;
 * em duas vezes, preço normal de etiqueta sem jurus;
 * Acima de duas vezes, preço normal de etiqueta mais juros de 10% 
 * 
 */


const precoEtiqueta = 100;
const formadePagamento = 2;
const formadePagamento1 = 'Debito';
const formadePagamento2 = 'Pix';
const formadePagamento3 = 'Dinheiro';
// coloquei as formas de pagamentos numeradas 

if (formadePagamento1 === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formadePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formadePagamento === 3) {
    console.log(precoEtiqueta + (precoEtiqueta * 0.10));
} else {
    console.log(precoEtiqueta+(precoEtiqueta * 0.1));
}


