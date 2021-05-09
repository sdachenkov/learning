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

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последких просмотренных фильмов?',''),
          b = prompt('На сколько оцениете его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        console.log('es');
        personalMovieDB.movies [a] = b;
    } else {
        console.log('error');
        i--;
    }
    
}

      console.log(personalMovieDB);