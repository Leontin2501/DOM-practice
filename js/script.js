/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      formAdd = document.querySelector('.add'),
      newFilm = document.querySelector('.adding__input'),
      btn = document.querySelector('button'),
      favoriteFilm = document.querySelector('#check'),
      delLi = document.querySelectorAll('.promo__interactive-item');
      
let newDel = document.createElement('button'),
    oldDel = document.querySelectorAll('.delete');

      


const deleteAdv = () => {
    adv.forEach(item => {
        item.remove();
    });
};



const makeChanges = () => {
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
};



const sortArr = (arr) => {
    movieDB.movies.sort();
};



function createMovieList (films, parent) {
    parent.innerHTML = "";
    films.forEach((film, i) => {
    parent.innerHTML += 
    `<li class="promo__interactive-item"> ${i + 1} ${film}
        <div class="delete"></div>
    </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies, movieList);
        });
    });
}



btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (newFilm.value.length > 21) {
        movieDB.movies[movieDB.movies.length] = newFilm.value.substr(0, 21) + '...';
    } else {
        movieDB.movies[movieDB.movies.length] = newFilm.value;
    }
    if (favoriteFilm.checked) {
        alert('new favorite film');
    }

    
    
    sortArr();  

    createMovieList (movieDB.movies, movieList);

    formAdd.reset();
});


deleteAdv();
makeChanges();
sortArr();
createMovieList (movieDB.movies, movieList);


















// const adv = document.getElementsByClassName('promo__adv');
// adv[0].remove();

// const oldGenre = document.getElementsByClassName('promo__genre');
// const promoBG = document.getElementsByClassName('promo__bg');
// oldGenre[0].remove();
// const drama = document.createElement('div');
// drama.classList.add('promo__genre');
// drama.insertAdjacentHTML('afterbegin', 'Драма');
// promoBG[0].prepend(drama);

// const newBG = document.getElementsByClassName('promo__bg');
// newBG[0].style.cssText = 'background: url(../img/bg.jpg) center center/cover no-repeat;';

// const movieList = document.querySelector('.promo__interactive-list');

// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += 
//     `<li class="promo__interactive-item"> ${i + 1} ${film}
//     <div class="delete"></div>
// </li>`;
// });






