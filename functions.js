// 'use strict'

// function showFirstMessage() {
//     console.log('Hello,world!')
// };
// showFirstMessage();
// let num=20;
// function showFirstMessage() {
//   num=50;
// };
// showFirstMessage();
// console.log(num)

// если переменна обьявслена внутри функции, то снаружи она уже не доступна
// Переменные let и const существуют только внутри блока {}
// переменные внутри {}- называются локальными
// глобальные переменные идут в основном потоке кода

// Замыкание функции- это классичекое поведение функции, когда функция вызывается, она выполняет код шаг за шагом,
//     если же не находит переменную внутри себя, будет искать ее глобально, выполяет код
// если не находит, то идет на уровень выше, до той области которая ей вобще доступна
//  return- всегда что-то возвращает, как только функция его видит, то она прекращает свое выполнение

// function calcSum(a, b) {
//     return a+b
// }
// console.log(calcSum(4,3))
// console.log(calcSum(10,3))
// console.log(calcSum(11,3))
// Никакой код, который написан после return не будет выполнятся

// function ret() {
//     let num=50;
//     return num
// }
//
// const anotherNum=ret();
// console.log(anotherNum)
// function ret() {
//     var num=50;
// }

// const anotherNum=ret();
// console.log(anotherNum)
// console.log(num)
// if(a+b){
//     var number=50;
//
// }
// console.log(number)

// const logger=function () {
// console.log('Hi all')
// };
// logger();
// function declaration- может быть вызвана когда угодно , существует во всем потоке кода
// function expression- существует только после ее обьявления
//
// const calcSum=(a,b)=>{return a+b}
// const calcNumbers=(a,b)=>a+b
// console.log(calcSum(2,4))
// console.log(calcNumbers(2,4))

// arrow function не имеет this
// const usdCurr=28;
// const eurCurr=33;
// const discount=0.9;
//
// function convert(amount,curr) {
//     return curr*amount
// }
// function promotion(result) {
//     console.log(result*discount)
// }
// const res= convert(500,eurCurr);
// promotion(res)
// // convert(500,usdCurr);
//
// console.log(res)

function test() {
    for(let i=0;i<5;i++){
        console.log(i);
        if(i===3)return
    }
    console.log('DOne!')
}
test()
function doNothing() {
    
};
console.log(doNothing()===undefined);

// После return не ставим перенос строки!

//     undefined в консоли браузера появится, при візове console.log()
// так как конслоь єто обьект, лог єто метод, мі туда что-то помещаем, а ретерн там нет