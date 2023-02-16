'use strict'

'use strict';
let numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

};
const firstQuestion=prompt('Один из последних просмотренных фильмов?');
const secondQuestion=+prompt('На сколько оцените его?');
const thirdQuestion=prompt('Один из последних просмотренных фильмов?');
const fourthQuestion= +prompt('На сколько оцените его?');

const movies ={
};
personalMovieDB.movies[firstQuestion]=secondQuestion;
personalMovieDB.movies[thirdQuestion]=fourthQuestion;
console.log(personalMovieDB);
