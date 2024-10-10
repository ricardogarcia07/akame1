let pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Garcia',
    idade: 29,
    altura: 1.65,
    dormir: function(){
        console.log(`${pessoa.nome}`)
    }
}

console.log(pessoa)
console.log(pessoa.nome, pessoa.sobrenome)
console.log(pessoa['nome'], pessoa['sobrenome'])


pessoa.nome = 'Ricardo'
console.log(pessoa.nome)
pessoa.idade = 14
console.log(pessoa.idade)



pessoa.peso = 75
console.log(pessoa)

pessoa.dormir()



pessoa.comer = function () {
    console.log(`${pessoa.nome} está com fome. Tá na hora da sopinha do véio.`)
} 

pessoa.comer()