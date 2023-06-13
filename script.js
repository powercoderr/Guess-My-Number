'use strict';

let number = Math.round(Math.random() * 10);
let highScore = 0;
let score = 20;

const checkAnswer = function () {
  const answer = Number(
    document.querySelector('.guess').value
      ? document.querySelector('.guess').value
      : 0
  );

  if (!answer) {
    document.querySelector(
      '.message'
    ).textContent = `Guess the number first ...`;
    return;
  }

  if (answer === number) {
    document.querySelector('.message').textContent = `Correct Number ...`;
    document.querySelector('.number').textContent = answer;
    document.querySelector('.highscore').textContent = answer;
    document.querySelector('body').style = 'background-color:green;';
    document.querySelector('.check').style = 'display:none;';
    return;
  }

  score--;
  let message = 'Your guess is ';
  if (answer > number) message += 'To High ...';
  if (answer < number) message += 'To Low ...';
  if (score === 0) {
    message = "Oops. Your chance has run out. Let's try again ...";
    document.querySelector('.check').style = 'display:none;';
  }

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = message;
  document.querySelector('body').style = 'background-color:#222;';
};

const startAgain = function () {
  number = Math.round(Math.random() * (10 - 1) + 1);
  score = 20;
  console.log(number);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style = 'background-color:#222;';
  document.querySelector('.check').style = 'display:inline-block;';
};

document.querySelector('.again').addEventListener('click', startAgain);
document.querySelector('.check').addEventListener('click', checkAnswer);
document.querySelector('.guess').addEventListener('keydown', function (event) {
  const keyEnter = 13;
  const score = Number(document.querySelector('.score').textContent);
  //If enter clicked & score isn't zero
  if (event.keyCode === keyEnter && score) {
    checkAnswer();
  }
});
