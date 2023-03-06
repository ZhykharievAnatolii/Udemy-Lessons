// 'use strict'
//
// // Обьекты в JavaScript- это ассоциативные массивы, например как в Php
//
// // const obj= new Object();
// // способ перебора обьекта - for in
// const options={
//     name:'test',
//     widht:1024,
//     height:1024,
//     colors:{
//         border:'black',
//         background:'red'
//     },
//     makeTest: function () {
//         console.log('test')
//     }
// }
// // console.log(options["colors"]["border"])
// // console.log(options.name);
// // console.log(options["widht"]);
// // delete options.name
// // console.log(options)
// // let counter=0;
// // for(let key in options){
// //     if(typeof(options[key])==='object' ){
// //         for (let i in options[key]){
// //             console.log(`Свойство ${i} имеет знаение ${options[key][i]}`);
// //         }
// //     }else{console.log(`Свойство ${key} имеет знаение ${options[key]}`)};
// //     counter++
// //
// // }
// // console.log(counter)
// console.log(Object.keys(options).length);
// console.log(Object.values(options).length);
// options.makeTest();
//
// // Обьекты это структуры, которые в себе могут содержать любые типы данных в формате ключ-значение
// // Они могут быть вложены одни в другие
// // Для перебора есть for in
// // Object.keys();
// // Object.values();
// // Также в обьекте есть встроенные методы и свойства
// //
// // Можем самостоятельно создавть их
// //
// // Существуют аксессоры- это встроенные методы get и  set
//
// // Деструктуризация обьектов и массивов
//
// const {border, background}=options.colors
//
// console.log(border)

let str='some';
let strobj=new String(str);
console.log(typeof (str));
console.log(typeof (strobj));
console.dir([1,2,3])