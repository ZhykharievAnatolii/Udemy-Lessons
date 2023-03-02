// 'use strict';
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };
// // 1) Напишите функцию showExperience, которая будет принимать в себя объект
// // со всеми данными и возвращать строку с опытом.
// //
// //     Пример:
// //
// // showExperience(personalPlanPeter) => '1 month'
// //
// // P.S. желательно использовать деструктуризацию, но не обязательно
// function showExperience(plan) {
//     let newObject={};
//     return
//
// }
// // 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными
// // и возвращать строку в нужном виде.
// //
// //     Пример:
// //
// // showProgrammingLangs(personalPlanPeter)  =>
// //
// // "Язык js изучен на 20% Язык php изучен на 10%"
// //
// // Причем функция должна работать вне зависимости от количества языков.
// //     Если ни один не указан, то возвращается пустая строка.
// //
// //     P.S. Для переноса строки используется \n в конце строки.
// function showProgrammingLangs(plan) {
//
// }
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
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);