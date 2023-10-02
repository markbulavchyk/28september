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


let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

// function show(hidden) {
//     if (!hidden) {
//         console.log('база не приватная');
//     }
// }
// show(personalMovieDB.privat)
// в аргумент передается значение privat = фолсе , если прийвет не равен тру , а по умолчанию он не равен тру то есть равен фолс то выводим msg


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, ``);
    }
}

writeYourGenres()
showMyDB();

