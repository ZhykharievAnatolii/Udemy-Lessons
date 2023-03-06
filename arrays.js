// // 'use strict'
// //
// // const arr=[1,2,13,6,4,5,6,17,8,4,5];
// //
// // // arr.pop()- удаляет последний елемент из массива
// // // arr.push()- добавляет елемент в конец массива
// // // arr.shift();- добавляет елемент в начало
// // // arr.unshift()-удаляет первый елемент
// // // arr.pop();
// // // arr.push(8)
// // // console.log(arr)
// // // console.log(arr.length)
// // // for(let i=0;i<arr.length;i++){
// // //     console.log(arr[i])
// // // };
// // // for(let value of arr){
// // //     console.log(value)
// // // }
// // // length- сосстоит из последнего индекса +1
// //
// // // arr[99]=0;
// // // console.log(arr.length);
// // // console.log(arr);
// // // callback- функция служит для того, чтобы выполнится после определенных действий,может быть, и чаще всего, анонимная
// //
// // // arr.forEach((item,index,arr)=>{
// // // console.log(`${index}: ${item} внутри массива ${arr}`)
// // // });
// // // forEach()- позволяет удобно перебрать каждый елемент массива но не имеет в себе break и  continue
// // // а в цикле for of они есть
// // // forEach()- единственный метод, который не видоизменяет массив, все остальные возвращают новый измененный
// // // arr.map(()=>{
// // //
// // // })
// // // split()- позволяет установить разделительв строке - позволяет сформировать массив на основании строк
// // // join()- обьединение елементов массива в строку
// // // sort()- сортирует все как строки, если будут числа, также их отсортирует как строки, может в себе содержать коллбек-
// // // функцию
// // // const str=prompt(',,,');
// // // const products=str.split(', ');
// // // products.sort();
// // // console.log(products.join(';'))
// // // arr.sort();
// // // console.log(arr)
// // function compareNum(a, b) {
// //     return a-b
// // }
// // arr.sort(compareNum);
// // console.log(arr)
// // console.log(typeof arr);
// //
// // // псевдомассив- это структура, подобная массиву, так же хранит елементы по порядку, но не имеет методов
//
// let a=5;
// let b;
// b=a+5;
// // console.log(a)
// // console.log(b)
// const obj={
//     a:5,
//     b:1
// };
// // const copy=obj;
// // copy.a=10;
// // console.log(copy);
// // console.log(obj);
//
// // все примитивы передаются по значению
//
// function copy(mainObj ) {
//     let objCopy={};
//     let key;
//     for(key in mainObj){
//         objCopy[key]=mainObj[key]
//     }
//     return objCopy;
// }
//
// const numbers={
//     a:2,
//     b:3,
//     c:{
//         x:7,
//         y:4
//     }
// };
// const newObject=copy(numbers);
// // newObject.a=5;
// // newObject.c.x=10;
// // console.log(newObject);
// // console.log(numbers);
//
// // При клонировании обьектов  при поверхностной копии будет видоизменяться вложенніе структурі, вложенность
// // будет передаваться по ссылке- поверхностная копия
// // Нормально работают только свойства, лежащие на первом уровне
// // Object.assign()- соединяет обьекты- создает независимую поверхностную копию обьекта
// const add={
//     d:17,
//     e:20
// };
// console.log(Object.assign(numbers,add));
// const clone= Object.assign({},add);
// clone.d=18;
// // console.log(clone)
//
// const oldArray=[1,1,2,3,5,7,9,0,2];
// const newArray=oldArray.slice();
// newArray[1]='jdkwjdlwd';
// console.log(oldArray);
// console.log(newArray);
//
// const video=['youtube', 'vimeo', 'rutube'];
// const blogs=['worldpress','livejornal', 'blogger'];
// const intertnet=[...video,...blogs, 'facebook', 'instagramm'];
// console.log(intertnet);
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// const num=[2,2,3];
// log(...num);
// const array=['a','b'];
// const newAaray=[...array];
// const q={
//     one:1,
//     two:2
// };
// const newObj={...q};
// console.log(newObj)

// JavaScript- объектно-ориентированный язык, главную роль внем играет объект
// Может содержать в себе методы, свойства и т.д.
// Смысл в том что мы предоставляем любую вещь,как объект, с набором совйств и методов

// У строки есть методы, когда мы их используем, то JS оборачивает ее в обьект, изменяет и возвращает назад примитив
// Когда мы создаем строки, массивы, обьекты, то все они облядают абсолютно одинаковыми методами и свойствами, с разным
// наполнением
// Когда мы создаем массив, мы создаем новый екземпляр прототипа массива
// Любые конструкции прототипно наследуются от объекта

// let str='some';
// let strObj=new String(str);
// console.log(typeof (str));
// console.log(typeof (strObj));
//
// console.dir([1,2,3]);

const soldier={
    health:400,
    armor:100,
    sayHello:function () {
        console.log('hello')
    }
};
const john=Object.create(soldier)
// const john={
//     health: 100,
// };
// john.__proto__=soldier;
//
// Object.setPrototypeOf(john,soldier)
// console.log(john.sayHello);
console.log(john.sayHello())