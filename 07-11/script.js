//ELEMENTOS
const botao = document.getElementById('botao1')
const titulo = document.getElementById('titulo1')

//FUNÇÕES
function trocaCor() {
    titulo.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//EXECUTAR
botao.addEventListener('click', trocaCor) //adicionar evento