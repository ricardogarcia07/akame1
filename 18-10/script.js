const body1 = document.getElementById('body1');
const botao1 = document.getElementById('botao1');
const img = document.getElementById('img');


img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.03)'
})


img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
})




function alterarCorDeFundo() {}

botao1.addEventListener ('click', () => {
    if (!alterarCorDeFundo) {
        body1.style.backgroundColor = 'tan';
        alterarCorDeFundo = true;
    } else {
        body1.style.backgroundColor = 'white';
        alterarCorDeFundo = false;
    }
});



botao1.addEventListener('click', alterarCorDeFundo);