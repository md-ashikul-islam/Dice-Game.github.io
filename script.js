'use strict';

// Selecting elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceELement = document.querySelector('.dice');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceELement.classList.add('hidden');
