'use strict';

// Selecting elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceELement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting state
score0Element.textContent = 0;
score1Element.textContent = 0;
diceELement.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionalities

btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2.display dice
  diceELement.classList.remove('hidden');
  diceELement.src = `dice-${dice}.png`;
  //3. Check if dice rolled : 1
  if (dice !== 1) {
    // add to current score
    currentScore += dice;
    current0Element.textContent = currentScore;
  } else {
    //switch to next player
  }
});
