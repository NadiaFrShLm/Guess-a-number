'use strict'

let score = 20;    //количество попыток
let highScore = 0; //самый лучший результат

// NOTE:функция вывода сообщения
const displayMessage = function (message) {
  document.querySelector('.message').textContent=message;
}
//NOTE:  функция вывода счктчмка попыток
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}
  

// рандомное число 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener
('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  
  // NOTE: when there is no input
  if (!guess) {
    displayMessage( '🚫 no number');
    
  // NOTE: если цифа указана верно, player WINS
  } else if (guess === secretNumber) {
    displayMessage('👍 You won');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#81B622';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    
  //NOTE: in the guess is different from the secret number  
  }else if(guess!==secretNumber){
    
    if (score > 1) { //если количество попыток больше 0
        displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
        score--;
        displayScore(score);
      } else {
        displayMessage('😩 You lost the game');
        displayScore (0);
      }
    }
})
  
document.querySelector('.again').addEventListener
  ('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; //новое рандомное число
    displayScore(20);
    displayMessage('Start guessing ...');

    //возвращаем экран в начальное состояние
    document.querySelector('body').style.backgroundColor = '#0E240B';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});