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

const lucas = new Pessoa('Lucas Saladini', 30)

lucas.descrever()