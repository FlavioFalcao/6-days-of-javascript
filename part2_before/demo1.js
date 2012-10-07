// HTML Element
var div_el = document.querySelector('#square');

// Code
var onclick = function( ev ) {
    for ( var i=0; i < 99999999999999; i++ ) {}
    ev.target.style.background = 'green';
};

// Event
div_el.addEventListener( 'click', onclick );
