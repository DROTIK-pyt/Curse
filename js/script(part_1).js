"use strict";

// 1)
let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

// 2)
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// 3)
let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    markFilm = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = markFilm;

console.log(personalMovieDB);
