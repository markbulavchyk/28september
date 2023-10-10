'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily (arr) {
    let str =  'Семья состоит из: '
    if (arr === '') {
        return 'Семья пуста';
    }

    for (let key of arr) {
        str += key + ' '
    }

    return str.trim();
}

// console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings (arr) {
    let str = arr.join('\n');

    return str.toLowerCase();
}

console.log(standardizeStrings(favoriteCities));