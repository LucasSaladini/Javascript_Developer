const numero = 11

const isNumeroPar = (numero % 2) === 0

if (numero === 0) {
    console.log('O número é inválido')
}else if (isNumeroPar) {
    console.log('Número Par')
} else {
    console.log('Número Ímpar')
}