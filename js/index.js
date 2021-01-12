/* `mouseover`
* `keydown`
* `wheel`
* `load`
* `focus`
* `resize`
* `scroll`
* `select`
* `dblclick`
* `drag / drop` */

// let nav = document.querySelector('.nav');
// nav.addEventListener('mouseover', event => nav.style.backgroundColor = 'blue');
// let nava = nav.querySelectorAll('a');
// console.log(nava);
// nava.forEach(element => addEventListener('mouseover', event => nava.style.backgroundColor = 'blue'));
// nava.forEach(function(elem){
    // elem.addEventListener('mouseover', () => nava.style.backgroundColor = 'blue')});
body = document.querySelector('body');
let nav = document.querySelector('.nav');

let nava = nav.querySelectorAll('a');
// let navLink = document.querySelectorAll('.nav-link');
// body.onload = ()=>navaLink.style.padding = '10px';

Array.from(nava).forEach((elem) => {
    elem.addEventListener('mouseover', (event) => {
        elem.style.color = 'white';
        elem.style.backgroundColor = 'navy';
        // elem.style.padding = '10px';
    })
});