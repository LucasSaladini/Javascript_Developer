const precoEtiqueta = 100
const formaPagamento = 3 //0 - À vista Débito    1 - À vista dinheiro ou PIX     2 - Em duas vezees     3 - Acima de duas vezes

if (formaPagamento === 0) {
    const valorProduto = precoEtiqueta - (precoEtiqueta * 0.10)
    console.log(valorProduto)
} else if (formaPagamento === 1) {
    const valorProduto = precoEtiqueta - (precoEtiqueta * 0.15)
    console.log(valorProduto)
} else if (formaPagamento === 2) {
    console.log(precoEtiqueta)
} else {
    const valorProduto = precoEtiqueta + (precoEtiqueta * 0.10)
    console.log(valorProduto)
}