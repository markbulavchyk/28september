'use strict';

// let x = 6, y = 3;

// x = y--;

// console.log(x, y);

const arr = [1, 2, 3, 6, 8];
arr.sort();


function compareNum (a,b){
    return a - b;
}

const a = arr.concat();
arr.push(9);
console.log(a);


arr.forEach(function (item, i, array) {
    console.log(`${i}: ${item} внутри массива ${array}`);
});


// for (let value of arr) {
//     console.log(value);
// }

const str = prompt(``, ``);
const products = str.split(',');
console.log(products);



