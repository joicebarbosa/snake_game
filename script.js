let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
        context.fillStyle = "red"
        context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', updated);

function updated(event) {
      if(event.keycode == 37 && direction != "right") direction = "left";
      if(event.keycode == 38 && direction != "down") direction = "up";
      if(event.keycode == 39 && direction != "left") direction = "rigth";
      if(event.keycode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
      if(snake[0].x > 15 * box && direction ==  "rigth") snake[0].x = 0;
      if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
      if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0; 
      if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;     

      criarBG();
      criarCobrinha();
      drawFood();       

      let snakex = snake[0].x;
      let snakey = snake[0].y;

      if(direction == "right") snakex += box;
      if(direction == "left") snakey -= box;
      if(direction == "up") snakex += box;
      if(direction == "down") snakey -= box;

      if(snakex != food.x || snake.y != food.y){
            snake.pop();
        }
        else{food.x = Math.floor(Math.random() * 15 + 1) * box;
             food.y = Math.floor(Math.random() * 15 + 1) * box;
        }

      let newHead = {
        x: snakex,
        y: snakey
      }
      
      snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
