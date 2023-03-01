'use strict'

function first() {
    //Do something
    setTimeout(function () {
        console.log(1)
    },5000)
}
function second() {
    console.log(2)
}
// first();
// second();

// Функция колбек- это функция, которая должна быть выполнена , когда другая функция завершила свое выполнение
// когда в одну функцию, в качестве аргумента мы передаем другую функцию
function learnJS(lang,callback ) {
    console.log(`I learn ${lang}`);
    callback();
}
function done() {
    console.log('I pass this exam')
}
learnJS('JavaScript',done)

// Функция коллбек выполняется всегда после основной функции
// Никогда не начнет свою работу , до тех прр пока основной код не завершит свою работу
