'use strict';



let str = 'some';

let strObj = new String();


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello');
    }
}

// const john = {
//     health: 100
// }

// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);

const john = Object.create(soldier);



