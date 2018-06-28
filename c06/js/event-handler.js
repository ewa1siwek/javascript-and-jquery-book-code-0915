function checkUsername() {
    var msg = document.getElementById('feedback');
    if (this.value.length < 5) {
      msg.textContent = 'Username must be 5 characters or more;'
    } else {
      msg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;
/*
function checkUsername() {                            // Declare function
  var elMsg = document.getElementById('feedback');    // Get feedback element
  if (this.value.length < 5) {                        // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
}

var elUsername = document.getElementById('username'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()*/
