/**
 * Use event capturing for a more effective
 * event handling
 */

var container = document.querySelector('#container');

var change_color = function(e) {

    if (e.target === e.currentTarget ) {
        return;
    }

    e.target.style.background = 'green';
};

container.addEventListener('click', change_color );


