'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj) {
        let str = `Мне ${obj.age} и я владею языками: `

        for (let key of obj.skills.languages) {
            str += `${key} `.toUpperCase();
        }

        return str.trim(); // метод трим убрал пробелы вконце
    }
}
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience (obj) {
    const {exp} = obj.skills

    return exp;
}

// console.log(showExperience(personalPlanPeter));

function showProgrammingLangs (obj) {
    
    let str = '';

    for (let key in obj.skills.programmingLangs) {
        str += `Язык ${key} изучен на ${obj.skills.programmingLangs[key]}\n`
    }

    return str
}

// console.log(showProgrammingLangs(personalPlanPeter));


