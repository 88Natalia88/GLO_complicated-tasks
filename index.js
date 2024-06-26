'use strict';
let land = 'ru';

if(land === 'ru'){
    console.log("Понедельник Вторник, Среда, Четверг, Пятница, Субота, Воскресенье");
} else if (lang === 'en') {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else {
    console.log("Неправильное значениеной lang");
}

switch(land) {
    case "ru":
        console.log("Понедельник Вторник, Среда, Четверг, Пятница, Субота, Воскресенье");
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    default:
        console.log('Неправильное значение переменной lang');
}

let days = {
    ru: ["Понедельник Вторник, Среда, Четверг, Пятница, Субота, Воскресенье"],
    en: ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]
};

console.log(days[land]);

let namePerson = prompt("What is your name?");

let result =
    namePerson === "Артем" ? "директор" :
    namePerson === "Александр" ? "преподаватель" :
    "студент";

console.log(result);