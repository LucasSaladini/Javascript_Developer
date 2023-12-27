const pessoa = {
    nome: 'Lucas Saladini',
    idade: 30,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}



pessoa.altura = 1.83
pessoa.nome = 'Alberto'
pessoa.idade = 25

pessoa.descrever()

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.descrever()

delete pessoa.nome

console.log(pessoa)

const atributo = 'idade'

console.log(pessoa[atributo])
console.log(pessoa['altura'])