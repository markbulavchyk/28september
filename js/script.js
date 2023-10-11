'use strict';

// function reverse (str) {

//     if (typeof(str) !== 'string') {
//         return "Ошибка!";

//     }

//     const arr = str.split('').reverse().join('');
//     // const arrReverse = arr.reverse();
//     // const reservedStr = arrReverse.join('');
//     // return reservedStr
//     return arr
// }

// const someString = 'This is some strange string';

// console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];

const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


function availableCurr(array, missCurr) {
    if (array.length === 0) {
        return 'Нет доступных валют'
    }

    let str = `Доступные валюты:\n`;

    const AllCurr = [...baseCurrencies, additionalCurrencies];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === missCurr) {
            continue;
        }
        str += `${array[i]}\n`
    }


    return str.trim();
}

console.log(availableCurr(['UAH', 'RUB', 'CHY'], 'CHY'));

