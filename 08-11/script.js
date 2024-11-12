function responder(correta) {
    if (correta) {
        alert('Resposta correta! Indo para próxima pergunta...');
    } else {
        setTimeout(() => {
            goFullScreen();
            exibirErro();  
        }, 2000);
    }
}

function exibirErro() {
    const telaCheiaErro = document.getElementById('telaCheiaErro');
    const somErro = document.getElementById('somErro');


    telaCheiaErro.style.display = 'flex';

    somErro.play();

    telaCheiaErro.addEventListener('click', () => {
        telaCheiaErro.style.display = 'none';
        sairTelaCheia();
    })
}

function goFullScreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (webkitRequestFullScreen()) {
            elem.webkitRequestFullScreen();
        } else if (elem.msRequestFullScreen)
            elem.msRequestFullScreen();
    }