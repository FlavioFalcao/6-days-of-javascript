console.log('Hello World');

var p = document.querySelector('p#text');
p.innerHTML = 'Wow JS is so cool';

p.style.color = 'white';

var now = new Date();

if ( now.getDay() == 6 ) {
    p.style.background = 'red';
} else {
    p.style.background = 'green';
}

