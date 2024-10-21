const ctx = canvas.getContext('2d');

const box = 20;

let snake = [{ x: box * 5, y: box * 5}];

let direction = 'RIGHT'



let food = {
    x: Math.floor(Math.random() * 20 ) * box,

    y: Math.floor(Math.random() * 20 ) * box
};


document.addEventListener('keydown', changeDirection);


function changeDirection(event) {

    if (event.keyCode === 37 && direction !== 'RIGHT') {direction =
    'LEFT';
}
    if (event.keyCode === 38 && direction !== 'DOWN') {direction =
        'UP'
    }

    if (event.keyCode === 39 && direction !== 'LEFT') {direction =
        'RIGHT'
    }

    if (event.keyCode === 40 && direction !== 'UP') {direction = 
        'DOWN'
    }

}

