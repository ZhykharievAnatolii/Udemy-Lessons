// // // 'use strict'
// //
// // // function showFirstMessage() {
// // //     console.log('Hello,world!')
// // // };
// // // showFirstMessage();
// // // let num=20;
// // // function showFirstMessage() {
// // //   num=50;
// // // };
// // // showFirstMessage();
// // // console.log(num)
// //
// // // если переменна обьявслена внутри функции, то снаружи она уже не доступна
// // // Переменные let и const существуют только внутри блока {}
// // // переменные внутри {}- называются локальными
// // // глобальные переменные идут в основном потоке кода
// //
// // // Замыкание функции- это классичекое поведение функции, когда функция вызывается, она выполняет код шаг за шагом,
// // //     если же не находит переменную внутри себя, будет искать ее глобально, выполяет код
// // // если не находит, то идет на уровень выше, до той области которая ей вобще доступна
// // //  return- всегда что-то возвращает, как только функция его видит, то она прекращает свое выполнение
// //
// // // function calcSum(a, b) {
// // //     return a+b
// // // }
// // // console.log(calcSum(4,3))
// // // console.log(calcSum(10,3))
// // // console.log(calcSum(11,3))
// // // Никакой код, который написан после return не будет выполнятся
// //
// // // function ret() {
// // //     let num=50;
// // //     return num
// // // }
// // //
// // // const anotherNum=ret();
// // // console.log(anotherNum)
// // // function ret() {
// // //     var num=50;
// // // }
// //
// // // const anotherNum=ret();
// // // console.log(anotherNum)
// // // console.log(num)
// // // if(a+b){
// // //     var number=50;
// // //
// // // }
// // // console.log(number)
// //
// // // const logger=function () {
// // // console.log('Hi all')
// // // };
// // // logger();
// // // function declaration- может быть вызвана когда угодно , существует во всем потоке кода
// // // function expression- существует только после ее обьявления
// // //
// // // const calcSum=(a,b)=>{return a+b}
// // // const calcNumbers=(a,b)=>a+b
// // // console.log(calcSum(2,4))
// // // console.log(calcNumbers(2,4))
// //
// // // arrow function не имеет this
// // // const usdCurr=28;
// // // const eurCurr=33;
// // // const discount=0.9;
// // //
// // // function convert(amount,curr) {
// // //     return curr*amount
// // // }
// // // function promotion(result) {
// // //     console.log(result*discount)
// // // }
// // // const res= convert(500,eurCurr);
// // // promotion(res)
// // // // convert(500,usdCurr);
// // //
// // // console.log(res)
// //
// // // function test() {
// // //     for(let i=0;i<5;i++){
// // //         console.log(i);
// // //         if(i===3)return
// // //     }
// // //     console.log('DOne!')
// // // }
// // // test()
// // // function doNothing() {
// // //
// // // };
// // // console.log(doNothing()===undefined);
// // //
// // // // После return не ставим перенос строки!
// //
// // //     undefined в консоли браузера появится, при візове console.log()
// // // так как конслоь єто обьект, лог єто метод, мі туда что-то помещаем, а ретерн там нет
// //
// // // Задачи:
// // //
// // //     1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// // //
// // //     Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
// // //     В решении вызывать функцию не нужно, программа сделает это за вас.
// // //
// // //     P.S. возвращать - это использовать ключевое слово return.
// // //
// // // P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.
// // //
// // // 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив
// // // из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// // //
// // //     Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
// // //
// // // 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
// // //     Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии.
// // // (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже),
// // // где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
// // //
// // //     Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент.
// // // (Проверяем через оператор typeof)
// // //
// // // Примеры:
// // //
// // //     Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// // //
// // // Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// // //
// // // Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// // //
// // // Вызов функции getMathResult(10, '5') даст ответ 10
// // //
// // // Вызов функции getMathResult(10, 0) даст ответ 10
// // //
// // // Вызов функции getMathResult(20, -5) даст ответ 20
// // const string="Привет, Антон!"
// // function sayHello() {
// //     return string
// // }
// //
// // const num=5;
// // function returnNeighboringNumbers(num) {
// //     return [4,num,6]
// // }
// // function getMathResult(num, times) {
// //     if (typeof(times) !== 'number' || times <= 0) {
// //         return num;
// //     }
// //
// //     let str = '';
// //
// //     for (let i = 1; i <= times; i++) {
// //         if (i === times) {
// //             str += `${num * i}`;
// //             // Тут без черточек в конце
// //         } else {
// //             str += `${num * i}---`;
// //             // Это тоже самое, что и
// //             // str = str + num * i + "---"
// //         }
// //     }
// //
// //     return str;
// // }
//
//
// 'use strict';
// let numberOfFilms;
// function start() {
//     numberOfFilms=+prompt('Сколько фильмов Вы уже посмотрели?');
//     while (numberOfFilms===''|| numberOfFilms===null||isNaN(numberOfFilms)){
//         numberOfFilms=+prompt('Сколько фильмов Вы уже посмотрели?')
//     }
// }
// start();
// const personalMovieDB={
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
//
//
// }
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// // rememberMyFilms();
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
//
// };
// // detectPersonalLevel();
//
//
// /* Задание на урок:
//
// 1) Первую часть задания повторить по уроку
//
// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
//
// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
//
// P.S. Функции вызывать не обязательно*
//  */
// function showMyDB(hidden) {
//   if(!hidden){
//       console.log(personalMovieDB);
//   }
// };
// showMyDB(personalMovieDB.privat);
//
// function writeYourGenres() {
//     for(let i=1;i<=3;i++){
//         personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();