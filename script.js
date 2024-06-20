'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 Enter Number';
  } else if (guess < number) {
    if (score <= 1) {
      return x();
    }
    document.querySelector('.message').textContent = `it's low`;
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > number) {
    if (score <= 1) {
      return x();
    }
    document.querySelector('.message').textContent = `it's high`;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = `💯 correct number`;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});

const x = function () {
  document.querySelector('.message').textContent = `you lost the game`;
  document.querySelector('.score').textContent = 0;
};
