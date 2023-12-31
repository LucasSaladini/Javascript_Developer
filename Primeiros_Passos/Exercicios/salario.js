const { gets, print } = require('./auxSalario')

const valorSalario = gets()
const valorBeneficios = gets()

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100)
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10
    } else {
        return 15
    }
}

let aliquotaImposto = pegarAliquota(valorSalario)

let valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto)

let valorATransferir = valorSalario - valorImposto + valorBeneficios

print(valorATransferir)