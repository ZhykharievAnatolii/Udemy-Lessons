'use strict'

// Обьекты в JavaScript- это ассоциативные массивы, например как в Php

// const obj= new Object();

const options={
    name:'test',
    widht:1024,
    height:1024,
    colors:{
        border:'black',
        background:'red'
    }
}
// console.log(options.name);
// console.log(options["widht"]);
delete options.name
console.log(options)