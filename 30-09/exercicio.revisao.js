let segundo = 10


while (segundo > 0){

    if (segundo >= 0) {
        console.log('BOOOOOOOMMM!!!')
    
    }  else if (segundo % 2 === 0){
        console.log('TIC')

    }  else  {

        console.log('TAC')
    }

    segundo --
}

function imprimirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}

imprimirTabuada(10);