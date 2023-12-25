const precoCombustivel = 5.79
const gastoListrosPorKm = 12
const distanciaEmKm = 1580

let gastoViagem = (distanciaEmKm / gastoListrosPorKm) * precoCombustivel

console.log(gastoViagem.toFixed(2))