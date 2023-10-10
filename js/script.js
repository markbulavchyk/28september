'use strict';

function getTimeFromMinutes (n) {

    if (typeof (n) !== 'number' || n < 0 || !Number.isInteger(n) || n > 600 ) {
        return "Ошибка, проверьте данные";
    }

    let hours = Math.floor(n / 60);

    let minutes = n % 60;

    let letterVarialle;

    

    if (hours === 1) {
        letterVarialle = 'час'
    } else if (hours > 1 && hours < 5) {
        letterVarialle = 'часа'
    } else {
        letterVarialle = 'часов'
    }

    const str = `Это ${hours} ${letterVarialle} и ${minutes} минут`

    return str;
}


// console.log(getTimeFromMinutes(0));




function findMaxNumber (a,b,c,d) {

    if (typeof(a) !== 'number' ||
    typeof(b) !== 'number' ||
    typeof(c) !== 'number' ||
    typeof(d) !== 'number') {
        return 0;
    } 

    return Math.max(a,b,c,d)
}

console.log(findMaxNumber(9,2,3,4));

