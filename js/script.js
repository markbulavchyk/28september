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

// function getMathResult(base, repeat) {
//     let str = '';

//     if (typeof repeat != 'number' || repeat <= 0) {
//         return base;
//     }

//     for (let i = 1; i <= repeat; i++) {
//         str += `${base * i}---`;
//     }

//     return str.slice(0, -3);
// }

// console.log(getMathResult(2,10));


// function calculateVolumeAndArea (n) {
//     let volume = (n * n * n)
//     let S = (n * 6) * n;

//     let str = '';
//     return [S , volume];
// }
// console.log(calculateVolumeAndArea(15));

function getCoupeNumber (n) {
    if (n < 0 || typeof n != 'number' || !Number.isInteger(n)) {
        return "Ошибка. Проверьте правильность введенного номера места"
    } else if (n  > 36 || n == 0) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(n / 4)
}

console.log(getCoupeNumber(5));




