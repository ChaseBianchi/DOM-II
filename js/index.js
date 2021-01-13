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


const navArr = Array.from(nava);

// navArr.forEach((a)=>a.style.padding='10px';));

document.querySelector('.nav-container').style.flexFlow='row wrap';
navArr.forEach((elem) => {
    elem.addEventListener('mouseover', (event) => {
        elem.style.color = 'white';
        elem.style.backgroundColor = '#17ABD1';
        // elem.style.padding = '10px';
    })
});

// Fun Bus heading random size on click

let funBus = document.querySelector('.logo-heading');
// funBus.style.position='relative';
funBus.addEventListener('click', () => funBus.style.fontSize=`${Math.random()*10}rem`);


//bus pic goes poof when pressing any button, and reappears when released.

let intro = document.querySelector('.intro');
let introImg = intro.querySelector('img');
let vanish = ()=>introImg.style.display='none';
let appear = ()=>introImg.style.display='block';
document.addEventListener('keydown',()=>{vanish()},false);
document.addEventListener('keyup',()=>{appear()},false); 

/// mouse enter and exit changing text

let textBox = document.querySelector('.text-content');
let letsGo = textBox.querySelector('h2');

textBox.addEventListener('mouseenter',()=>{letsGo.innerHTML=`Let's Go! Come on!!!`}, false);
textBox.addEventListener('mouseleave',()=>{letsGo.innerHTML=`Been there, done that...`}, false);
