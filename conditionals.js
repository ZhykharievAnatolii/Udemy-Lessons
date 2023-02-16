'use strict';
// if (condition) {
//     code to run if condition is true
// } else {
//     run some other code instead
// };
// условие внутри круглых скобок должно быть преобразовано к булиновому типу true, false
// if(4==9){
//     console.log('Ok!')
// }else {
//     console.log('Error!')
// };
//
// if(1){
//     console.log('Ok!')
// }else {
//     console.log('Error!')
// };
// if(true){
//     console.log('Ok!')
// }else {
//     console.log('Error!')
// };

// if(num<49){
//     console.log('false!')
// }else if(num>100){
//     console.log('false!')
// }else {
//     console.log('OK!')
// };
// (num==47)?console.log('OK!'):console.log('false!');

// switch ()-это всегда строгое сравнение!!!
//     обычные условия не обязательно

const num=50;
switch (num) {
    case 49:
        console.log('false!');
        break;
    case 50:
        console.log('true');
        break;
    default:console.log('sorry not this time');
        break;

}