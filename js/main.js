'use strict';

var guess,
    answer,
    message,
    hint1,
    hint2;

// Generate random number between 1 and 100
answer = Math.floor(Math.random() * 100 + 1);
console.log('The answer is ' + answer);


for (var i = 0; i < 3; i++) {
  guess = prompt("I'm thinking of a number between 1 and 100... what is it?");
  console.log('The user guessed ' + guess)

  if (guess > answer) {
    hint1 = guess + ' is too high. Try a lower number';
  } else {
    hint1 = guess + ' is too low. Try a higher number.';
  }
  console.log(hint1);
  addToHintList();

  if (answer % 2 == 0) {
    hint2 = 'I am thinking of an EVEN number';
  } else {
    hint2 = 'I am thinking of an ODD number';
  }
}


if (guess == answer) {
  message = "Are you a wizard? You got it right!";
} else {
  message = "Oh well. You only had a 1% chance anyway. Don't cry.";
}
console.log(hint2);

var darcySays = document.getElementById('darcy-says');
// darcySays.innerHTML = message + '<p><img src="img/darcy-sam.jpg"></p>';
darcySays.innerHTML = message;

// var firstHint = document.getElementById('first-hint');
// firstHint.innerHTML = '<p>' + hint1 + '<p>' + hint2 + '</p>';

function addToHintList() {
  var hintListItem = document.createElement('li');
  var hintNode = document.createTextNode(hint1);
  hintListItem.appendChild(hintNode);
  document.getElementById('hint-list').appendChild(hintListItem);
}
