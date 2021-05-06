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