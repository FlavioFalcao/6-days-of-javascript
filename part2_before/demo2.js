var cont = document.querySelector('#container');

var togreen = function(ev) {
    if ( ev.target == ev.currentTarget ) {
        return;
    }

    ev.target.style.background = 'green';
};

cont.addEventListener('click', togreen);