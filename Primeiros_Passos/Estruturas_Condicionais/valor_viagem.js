const precoGasolina = 6.66
const precoEtanol = 5.79
const tipoCombustivel = 0 //0 - Gasolina     1 - Etanol
const gastoPorKm = 10
const distanciaKm = 100

const gastoCombustivel = (distanciaKm / gastoPorKm)

if (tipoCombustivel === 0) {
    const valorGasto = (gastoCombustivel * precoGasolina)
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = (gastoCombustivel * precoEtanol)
    console.log(valorGasto.toFixed(2))
}