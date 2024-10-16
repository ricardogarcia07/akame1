const meuParagrafo = document.getElementById('texto');
const meubotao = document.getElementById('meubotao');
const meubotao2 = document.getElementById('meubotao2');




function alterarTexto() {
    meuParagrafo.textContent = 'O texto foi alterado!';
}
function alterarCor() {
    meuParagrafo.style.color = 'red';
}


meubotao.addEventListener('click', alterarTexto);
meubotao2.addEventListener('click', alterarCor)
 

