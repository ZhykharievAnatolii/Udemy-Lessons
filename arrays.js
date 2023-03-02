'use strict'

const arr=[1,2,13,6,4,5,6,17,8,4,5];

// arr.pop()- удаляет последний елемент из массива
// arr.push()- добавляет елемент в конец массива
// arr.shift();- добавляет елемент в начало
// arr.unshift()-удаляет первый елемент
// arr.pop();
// arr.push(8)
// console.log(arr)
// console.log(arr.length)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// };
// for(let value of arr){
//     console.log(value)
// }
// length- сосстоит из последнего индекса +1

// arr[99]=0;
// console.log(arr.length);
// console.log(arr);
// callback- функция служит для того, чтобы выполнится после определенных действий,может быть, и чаще всего, анонимная

// arr.forEach((item,index,arr)=>{
// console.log(`${index}: ${item} внутри массива ${arr}`)
// });
// forEach()- позволяет удобно перебрать каждый елемент массива но не имеет в себе break и  continue
// а в цикле for of они есть
// forEach()- единственный метод, который не видоизменяет массив, все остальные возвращают новый измененный
// arr.map(()=>{
//
// })
// split()- позволяет установить разделительв строке - позволяет сформировать массив на основании строк
// join()- обьединение елементов массива в строку
// sort()- сортирует все как строки, если будут числа, также их отсортирует как строки, может в себе содержать коллбек-
// функцию
// const str=prompt(',,,');
// const products=str.split(', ');
// products.sort();
// console.log(products.join(';'))
// arr.sort();
// console.log(arr)
function compareNum(a, b) {
    return a-b
}
arr.sort(compareNum);
console.log(arr)
console.log(typeof arr);

// псевдомассив- это структура, подобная массиву, так же хранит елементы по порядку, но не имеет методов