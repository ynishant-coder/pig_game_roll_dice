'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const curret0El = document.querySelector('#current--0');
const curret1El = document.querySelector('#current--1');

let curretScore0 = 0;
let curretScore1 = 0;
score0El.textContent = 0;
score1El.textContent = 0;

//diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  const dice = Math.trunc(Math.random() * 6) + 1;
  //diceEl.src = `dice-${dice}.png`;
  diceEl.src = `dice-${dice}.png`;
  //console.log(dice)
  if (dice != 1) {
    curretScore0 += dice;
    curret0El.textContent = curretScore0;
  } else {
  }
});
btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
});
