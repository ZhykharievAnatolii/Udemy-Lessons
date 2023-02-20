// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно
// получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//     Должен получиться точно такой же массив

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//
//     for(let i=arr[1]; i<arr.length;i++){
//     result[i]=arr[i]
//     }
//
//
//     // Не трогаем
//     return result;
//     console.log(result)
// }
// console.log(result)
// Измените данный массив так, чтобы все числа были увеличены в 2 раза,
//     а если попадается строка строка - то к ней было добавлено " - done".
//     Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//
//     for(let i=data[0];i<data.length;i*2){
//         data[i]=data[i];
//         if(typeof data==="string"){
//             data[i]=data[`${[i]} '-done'`]
//         }
//     }
//
//
//     // Не трогаем
//     return data;
// }
// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//
//     console.log(data);
//     return data;
// }
// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
//     Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//
//     // Пишем решение вот тут
//
//
//     // Не трогаем
//     return result;
// }
// Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. Но мы с вами займемся базовой фигурой.
//     Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:
//     *
// ***
// *****
// *******
// *********
// ***********
// const lines = 5;
// let result = '';
// // let result='';
// // const length=7;
//
// for(let i=1;i<length;i++){
//
//     for(let j=0;j<i;j++){
//         result +='*';
//     }
//     result +='\n';
//
// }
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// let numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

};

for(let i=0;i<2;i++){
    const firstQuestion=prompt('Один из последних просмотренных фильмов?');
    const secondQuestion=+prompt('На сколько оцените его?');
    if(firstQuestion!=''&&!=firstQuestion.length>=50&&firstQuestion!=null){
        personalMovieDB.movies[firstQuestion]=secondQuestion;
        console.log("DONE!")
    }else{
        console.log(err);
        i--;
    }

}
if(personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов")
} else if(personalMovieDB.count>=10&&personalMovieDB<30){
    console.log(""Вы классический зритель")
} else if(personalMovieDB.count>=30){
    console.log("Вы киноман")
} else console.log('err!')
// const thirdQuestion=prompt('Один из последних просмотренных фильмов?');
// const fourthQuestion= +prompt('На сколько оцените его?');

const movies ={
};
// personalMovieDB.movies[firstQuestion]=secondQuestion;
// personalMovieDB.movies[thirdQuestion]=fourthQuestion;
// console.log(personalMovieDB);
