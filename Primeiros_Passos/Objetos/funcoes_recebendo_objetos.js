class Pessoa {
    nome
    idade
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2023 - idade
    }
    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e meu ano de nascimento é ${this.anoDeNascimento}`)
    }
}

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`)
    }
}

const lucas = new Pessoa('Lucas Saladini', 30)
const amanda = new Pessoa('Amanda Rocha', 30)

compararPessoas(lucas, amanda)