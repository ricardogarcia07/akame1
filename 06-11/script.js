const meuTitulo = document.getElementById("titulo")

const meuSubtitulo = document.getElementsByClassName('subtitulo')

const subtitulo = document.querySelector('.subtitulo')

subtitulo.style.color = 'blue'


const subtitulo2 = document.querySelectorAll('.subtitulo')

subtitulo2[2].style.color = 'orange'


for (let i = 0; i < meuSubtitulo.length; i++){
    meuSubtitulo[i].style.color = 'blue'

}

meuTitulo.style.color = "navy"


meuTitulo.innerText = 'Oi Carlinhos 😀'

meuSubtitulo


const novoParagrafo = document.createElement('p')

novoParagrafo.textContent = 'Este é meu novo texto'

document.body.appendChild(novoParagrafo)



const paragrafoRemover = document.getElementById('remover')
paragrafoRemover.remover()