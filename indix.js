"use strict"
const num = 50;
(num == 49) ? console.log('ok') : console.log('error');

switch (num) {
    case 49:
        alert('ok');
        break;
    case 50:
        alert('eeee');
        break;
    default:
        alert('В другой раз');

}


const numberofFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};
const a = prompt('Один из последких просмотренных фильмов?',''),
      b = prompt('На сколько оцениете его?', ''),
      c = prompt('Один из последких просмотренных фильмов?',''),
      d = prompt('На сколько оцениете его?', '');

      personalMovieDB.movies [a] = b;
      personalMovieDB.movies [c] = d;
      console.log(personalMovieDB);