'use strict';

var guess, answer, message;

// Generate random number between 1 and 100
answer = Math.floor(Math.random() * 100 + 1);
console.log(answer);

guess = prompt("I'm thinking of a number between 1 and 100... what is it?");

if (guess == answer) {
  message = "Are you a wizard? You got it right!";
} else {
  message = "Oh well. You only had a 1% chance anyway. Don't cry.";
}

var darcySays = document.getElementById('darcy-says');
darcySays.innerHTML = message;
