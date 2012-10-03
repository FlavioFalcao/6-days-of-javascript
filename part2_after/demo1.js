/**
 * Use an Event Handler to change the background color
 * of a div
 */

var div = document.querySelector('#square');

var change_color = function(e) {
    div.style.background = 'green';
}

div.addEventListener( 'click', change_color );
