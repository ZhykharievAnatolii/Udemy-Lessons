const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);
// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
//
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
//
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
//
// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить
// в консоль эти строки в нижнем регистре.
//
//     Пример:
//
// standardizeStrings(favoriteCities)  выведет в консоль
//
// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут
// прийти ответы в самых разных форматах. В том числе и с разными буквами :)
// Поэтому нам нужно привести строки в один формат для правильной работы.

// 3) Задача с собеседований. Напишите функцию reverse,
//     которая принимает в себя строку и возвращает эту строку в обратном порядке.

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')