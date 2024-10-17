const meuParagrafo = document.getElementById('texto');
const meubotao = document.getElementById('meubotao');
const meubotao2 = document.getElementById('meubotao2');
const meubotao3 = document.getElementById('meubotao3');




function alterarTexto() {}

meubotao.addEventListener('click', () => {
    if (!alterarTexto) {
        meuParagrafo.textContent = 'O texto foi alterado';
        alterarTexto = true;
    } else {
        meuParagrafo.textContent = 'Clique no botão para mudar este texto';
        alterarTexto = false;
    }
});

meubotao.addEventListener('click', alterarTexto);

function alterarCor() {
    meuParagrafo.style.color = 'violet';
}
function alterarCorDeFundo() {
    meubotao3.style.backgroundColor = 'darkcyan';
}




meubotao.addEventListener('click', alterarTexto);
meubotao2.addEventListener('click', alterarCor);
meubotao3.addEventListener('dblclick', alterarCorDeFundo);



