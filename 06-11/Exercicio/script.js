const meuTitulo = document.getElementById('titulo')


const meuSubtitulo = document.getElementsByClassName('subtitulo')

meuTitulo.style.color = '#326f9c';

for (let i = 0; i < meuSubtitulo.length; i++){
    meuSubtitulo[i].style.font-size = '2px'

}