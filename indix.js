"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres:[],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько мультиков вы уже смотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || personalMovieDB.count == isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько мультиков вы уже смотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
        
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};



