function checkUserLength(e, minLength) {
    var el;
    var elMsg;

    el = e.target;
    elMsg = el.nextSibling;

    if (el.value.length < minLength) {
        elMsg.textContent = 'Minimum ' + minLength + ' characters'
    } else {
        elMsg.textContent = '';
    }
}
var elUsername = document.getElementById('username');

elUsername.addEventListener('blur', function (e) {
    checkUserLength(e, 5);
}, false);

/*function checkLength(e, minLength) {         // Declare function
    var el, elMsg;                             // Declare variables
    el = e.target;             // Get target of event
    elMsg = el.nextSibling;                    // Get its next sibling

    if (el.value.length < minLength) {         // If length is too short set msg
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    } else {                                   // Otherwise
        elMsg.innerHTML = '';                    // Clear message
    }
}

var elUsername = document.getElementById('username');// Get username input
         // If event listener supported
    elUsername.addEventListener('blur', function(e) {  // On blur event
        // NOTE: This function is checkLength() - not checkUsername()
        checkLength(e, 5);                             // Call checkLength()
    }, false);                                       // Capture in bubble phase*/
/*

function checkLength(e, minLength) {         // Declare function
    var el, elMsg;                             // Declare variables
    if (!e) {                                  // If event object doesn't exist
        e = window.event;                        // Use IE fallback
    }
    el = e.target || e.srcElement;             // Get target of event
    elMsg = el.nextSibling;                    // Get its next sibling

    if (el.value.length < minLength) {         // If length is too short set msg
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    } else {                                   // Otherwise
        elMsg.innerHTML = '';                    // Clear message
    }
}

var elUsername = document.getElementById('username');// Get username input
if (elUsername.addEventListener) {           // If event listener supported
    elUsername.addEventListener('blur', function(e) {  // On blur event
        // NOTE: This function is checkLength() - not checkUsername()
        checkLength(e, 5);                             // Call checkLength()
    }, false);                                       // Capture in bubble phase
} else {                                           // Otherwise
    elUsername.attachEvent('onblur', function(e) {   // IE fallback onblur
                                                     // NOTE: This function is checkLength() - not checkUsername()
        checkLength(e, 5);                             // Call checkLength()
    });
}*/
