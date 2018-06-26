var score = 60;
var msg = '';

function congratulate() {
    msg += 'Congratulations! ';
}

if (score > 30) {
  congratulate();
  msg += 'Proceed to the next round.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;
/*
var score = 75;    // Score
var msg = '';      // Message

function congratulate() {
  msg += 'Congratulations! ';
}

if (score >= 50) {  // If score is 50 or more
  congratulate();
  msg += 'Proceed to the next round.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;*/
