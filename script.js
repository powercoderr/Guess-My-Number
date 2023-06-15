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
    if (answer > highScore) highScore = answer;
    changeElementText('.message', 'Correct Number ...');
    changeElementText('.number', answer);
    changeElementText('.highscore', highScore);

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.check').style.display = 'none';
    return;
  }

  score--;
  let message = 'Your guess is ';
  if (answer > number) message += 'To High ...';
  if (answer < number) message += 'To Low ...';
  if (score === 0) {
    message = "Oops. Your chance has run out. Let's try again ...";
    document.querySelector('.check').style.display = 'none';
  }

  changeElementText('.score', score);
  changeElementText('.number', '?');
  changeElementText('.message', message);
  document.querySelector('body').style.backgroundColor = '#222';
};

const startAgain = function () {
  number = Math.round(Math.random() * (10 - 1) + 1);
  score = 20;
  console.log(number);

  changeElementText('.number', '?');
  changeElementText('.score', score);
  changeElementText('.message', 'Start guessing ...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').style.display = 'inline-block';
};

const changeElementText = function (element, text) {
  document.querySelector(element).textContent = text;
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
