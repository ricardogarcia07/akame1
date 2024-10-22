const canvas = document.getElementById('gameCanvas');

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




function draw() {
    ctx.fillStyle = 'Indigo';

    ctx.fillRect(0, 0, canvas.width, canvas.height);



    for (let i = 0; i < snake.length; i++) {

    if (i === 0) {
        ctx.fillStyle = 'DarkOrange';
    } else {
        ctx.fillStyle = 'white';
    }

    ctx.fillRect(snake[i].x, snake[i].y, box, box);

    ctx.strokeStyle = 'black';

    ctx.strokeRect(snake[i].x, snake[i].y, box, box);

    }

    ctx.fillStyle = 'darkred';

    ctx.strokeStyle = 'black';

    ctx.strokeRect(food.x, food.y, box, box);

    ctx.fillRect(food.x, food.y, box, box);


    let snakeX = snake[0].x;

    let snakeY = snake[0].y;


    if (direction === 'LEFT') {
        snakeX -= box;
    } else if (direction === 'UP') {
        snakeY -= box;
    } else if (direction === 'RIGHT') {
        snakeX += box;
    } else if (direction === 'DOWN') {
        snakeY += box;
    }





    if (snakeX === food.x && snakeY === food.y) {

        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {

        snake.pop();
    }


    const newHead = { x: snakeX, y: snakeY};


    snake.unshift(newHead);
    
    
}

setInterval(draw, 150)

draw()