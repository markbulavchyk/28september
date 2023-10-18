'use strict';

// to string 

// 1)

console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2)

// Конкатинация
// сложение строки с чем -то

console.log(typeof (5 + ''));
const num = 5;

console.log('http://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// to Number 

console.log(typeof (Number('string')));

// 2 

// унарный плюс

console.log(typeof (+'5'));

// 3)
console.log(typeof (parseInt('15px', 10)));

let answ = +prompt('hello', '');

//to Boolean
// 1)

0,'',null,undefined,NaN;

let switcher = null;



switcher = 1;

if (switcher) {
    console.log('Working...');
}



// 2

console.log(typeof (Boolean(null)));

// 3)

console.log(typeof (!!''));