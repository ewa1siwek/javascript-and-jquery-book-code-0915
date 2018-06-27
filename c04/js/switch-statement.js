var level = 2;
var msg;

switch (level) {
    case 1:
        msg = 'Good luck on thefirst test';
        break;
    case 2:
        msg = 'Second of three - keep going!';
        break;

    case 3:
        msg = 'Final round - keep going';
        break;
    default:
        msg = 'Good luck!'
        break;
}

var el = document.getElementById('answer');
el.innerHTML = msg;
/*
var msg;        // Message
var level = 2;  // Level

// Determine message based on level
switch (level) {
case 1:
    msg = 'Good luck on the first test';
    break;

case 2:
    msg = 'Second of three - keep going!';
    break;

case 3:
    msg = 'Final round, almost there!';
    break;

default:
    msg = 'Good luck!';
    break;
}

var el = document.getElementById('answer');
el.textContent = msg;*/
