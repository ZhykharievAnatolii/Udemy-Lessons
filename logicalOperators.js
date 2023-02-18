'use strict'

// к логическим операторам относится логическое или || и &&  и оператор отрицания не !
// все эти операторы что-то возвращают
//
// Оператор && в классическом варианте возвращает true
// Учасники операций, аргументы, верны

// const hamburger=true;
// const fries=false;

// const hamburger=5;
// const fries=0;
// if(hamburger&&fries){
//     console.log('Cool!!!' )
// }else {
//     console.log('No!')
// };
// console.log((hamburger&&fries));

// Результат логических операция- это всегда логическое, булевое значение

// Динамическая типизация- это когда одни типы данных переходят в другие, чтока может стать числом, чило строкой,
//     или булиновым значением

// Условия и логические операторы занимаются логическим преобразованием
// В Js 5 сущностей, которые всегда будут false
//
// Это: 0,
//     пустая строка- "";
// null
// NaN
// Undefined
//
// Все остальное всегда true
// const hamburger=3;
// const fries=1;
// const cola=1;
// console.log((hamburger===3&&cola&&fries===1))
//
// if(hamburger===3&&cola===1&&fries===1){
//     console.log('Cool!!!' )
// }else {
//     console.log('No!')
// };

// Оператор И возвращает первое ложное значение на котором он остановился
// Если все правдивы, то вернет последний
//
// console.log(0&&5);
// console.log(true&&5);
// console.log(null&&5);
// console.log(0&&'hfefje');
// console.log(1&&5);

// console.log( !1 && 2 || !3 );

// const hamburger=1;
// const fries=0;
// const cola=2;
//
// if(hamburger || cola || fries){
//     console.log('Cool!!!' )
// }else {
//     console.log('No!')
// };

// Как только || находит true, то он перестает работать
// Если все false, то возвращает последнее ложное значение
// const hamburger=1;
// const fries=3;
// const cola=2;
// const nuggets=3;
//
// if(hamburger===3 && cola ===2 || fries===3&&nuggets){
//     console.log('Cool!!!' )
// }else {
//     console.log('No!')
// };

// console.log(!false);
// console.log(!0);
// console.log(!1)

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);