class Pessoa {
    nome
    idade
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const lucas = new Pessoa()
lucas.nome = 'Lucas Saladini'
lucas.idade = 30

const amanda = new Pessoa()
amanda.nome = 'Amanda Rocha'
amanda.idade = 30

lucas.descrever()
amanda.descrever()