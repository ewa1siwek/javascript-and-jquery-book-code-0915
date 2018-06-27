var score = 70;
var pass = 50;
var msg;

if (score > pass) {
  msg = 'Congratulations, you passed!';
} else {
  msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.innerHTML = msg;
/*
var pass = 50;      // Pass mark
var score = 75;    // Current score
var msg;            // Message

// Select message to write based on score
if (score > pass) {
  msg = 'Congratulations, you passed!';
} else {
  msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;*/
