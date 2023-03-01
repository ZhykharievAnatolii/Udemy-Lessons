'use strict'

// Обьекты в JavaScript- это ассоциативные массивы, например как в Php

// const obj= new Object();
// способ перебора обьекта - for in
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
// delete options.name
// console.log(options)
for(let key in options){
    if(typeof(options.key)==="object" ){
        for (let i in options.key){
            console.log(`Свойство ${key} имеет знаение ${options[key]}`)
        }
    }
    console.log(`Свойство ${key} имеет знаение ${options[key]}`)
}