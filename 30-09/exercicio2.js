let carro = {
    marca: 'Ford',
    modelo: 'Corcel',
    cor: 'Dark Blue',
    andar: function () {
        console.log(`A ${carro.marca} ${carro.modelo} está andando.`)
    },
    buzinar: function() {
        console.log(`A ${carro.marca} ${carro.modelo} está buzinando.`)
    }
    

}


carro.andar()
carro.buzinar()

carro.marca = 'Chevrolet'
carro.modelo = 'Impala'
carro.ano = '1967'

carro.andar()
carro.buzinar()