'use strict'

let num=50;


// while (num<=55){
// console.log(num);
// num++
// };

// do{
//     console.log(num);
//     num++
// }while (num<=55)

// for(let i=1;i<=8;i++){
//     // console.log(i)
//     console.log(num);
//     num++
// };

// for(let i=1;i<10;i++){
//    if(i===6){
//        // break
//        continue
//    }
//     console.log(i);
// }
// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// Место для первой задачи
// function firstTask() {
//     for(let i=5;i<=10;i++){
//         console.log(i)
//     }
//
//
// }
// При помощи цикла for вывести числа от 20 до 10 в консоль.
//     В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// Место для второй задачи
// function secondTask() {
//     for(let i=20;i>=10;i--){
//         if(i===13)
//             break
//         console.log(i)
//     }
// }
// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) break;
//         console.log(i)
//     }
// }

// Место для третьей задачи
// При помощи цикла for выведите чётные числа от 2 до 10 включительно
// function thirdTask() {
//     for(let i=2;i<=10;i++);
//     if(i%2===0){
//         console.log(i)
//     };
//
// }
// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
//     Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// function fourthTask() {
//     while(i<=16){
//         if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
//     }
//
//
// }
// Заполните массив цифрами от 5 до 10 включительно.
//     Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// Место для пятой задачи
//
// function fifthTask() {
//     const arrayOfNumbers = [];
//
//     for (let i=5;i<=10;i++){
//         arrayOfNumbers[i]
//     }
//
//
//     // Не трогаем
//     return arrayOfNumbers;
// }

for(let i=0;i<3;i++){
    console.log(i);
    for(let j=0;j<3;j++){
        console.log(j)
    }
}

// внутри вложенного цикла пишем не i а j
