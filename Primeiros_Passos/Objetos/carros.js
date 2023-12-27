class Carro {    
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    marca
    cor
    gastoMedioPorKm
    
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
    }
}

const uno = new Carro('FIAT', 'Prata', (1/12))
const palio = new Carro('FIAT', 'Preto', (1/10))

gasto = uno.calcularGastoDePercurso(70, 5)
console.log(gasto)

gasto1 = palio.calcularGastoDePercurso(70, 5)
console.log(gasto1)