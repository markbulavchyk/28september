'use strict';

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);

//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);

//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// let num = 20;

// function showFirstMessage(text) {
//     let num = 10;
// }

// showFirstMessage('Hello');

// console.log(num);

// function calc (a,b) {
//     return (a + b);
// }

// console.log(calc(3,3));


// function ret() {
//     let num = 52;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = () => {
//     console.log('logg');
// };

// logger();

// console.log(typeof logger);

// const calc = (a,b) => a + b;



// функция пересчета курса 

const usdCurr = 28;
const eurCurr = 32;

function convert(curr, amount) {
    console.log(curr * amount);
}

convert(500,usdCurr);
convert(500,eurCurr);