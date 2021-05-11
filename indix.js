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

let numberofFilm
function start() {
    numberofFilm = +prompt('Сколько мультиков вы уже смотрели?', '');

    while (numberofFilm == '' || numberofFilm == null || numberofFilm == isNaN(numberofFilm)) {
        numberofFilm = +prompt('Сколько мультиков вы уже смотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};


function rememberMyFilms() {
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
    
}

rememberMyFilms();



function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);


function first () {
    // Do something
    setTimeout(function() {
        console.log (1);
    }, 500);
}

  function second() {
      console.log (2);
  }

  first();
  second();

function learnJS(lang, callback) {
    alert (`Я учу:${lang}`);
    collback();
}


function done() {
    alert ('Я прошел этот урок!');
}

learnJS('JavaScript', done);











