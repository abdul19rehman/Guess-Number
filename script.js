'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessgae = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessgae('Better Next time');
  } else if (guess === secretNumber) {
    displayMessgae('You Won Alhmadullialh');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessgae(guess > secretNumber ? 'High' : 'Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessgae('You Ran out of Time');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessgae('Lets Start');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#000000 ';
});

// document.querySelector('.check').addEventListener;
// {
//   click, function () {};
// }

// document.querySelector('.number').textContent = '15';

// document.querySelector('body').style.backgroundColor = '#60b347';
