const { gets, print } = require('./funcoes_auxiliares')

const quantidadeInputs = gets()

let maiorValorEnconrado = 0

for (let i = 0; i < quantidadeInputs; i++) {
    const numeroSorteado = gets()
    if(numeroSorteado > maiorValorEnconrado) {
        maiorValorEnconrado = numeroSorteado
    }
}

print(maiorValorEnconrado)