function aplicarDesconto(precoEtiqueta, desconto) {
    return precoEtiqueta - (precoEtiqueta * (desconto / 100))
}

function aplicarJuros(precoEtiqueta, juros) {
    return precoEtiqueta + (precoEtiqueta * (juros / 100))
}

const precoEtiqueta = 100
const formaPagamento = 3 //0 - À vista Débito    1 - À vista dinheiro ou PIX     2 - Em duas vezees     3 - Acima de duas vezes

if (formaPagamento === 0) {
    console.log(aplicarDesconto(precoEtiqueta, 10))
} else if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 15))
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 0))
} else {
    console.log(aplicarJuros(precoEtiqueta, 10))
}