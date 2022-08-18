// API: http://www.omdbapi.com/?i=tt3896198&apikey=1b90d60f
// API SEARCH: https://www.omdbapi.com/?apikey=1b90d60f&s=fast

const movieListElement = document.querySelector('.movies__wrapper');
const movieNameInput = document.querySelector('input').value

async function buttonSearch(){
    const movieNameEnterButton = document.querySelector('input').value;
    console.log(movieNameEnterButton);
    renderMovies(movieNameEnterButton);
}

async function search(event){
    const movieNameEnterKey = document.querySelector('input').value
    console.log(movieNameEnterKey);
    if (event.keyCode === 13) {
        renderMovies(movieNameEnterKey);
    }
}

async function renderMovies(movieName){
    /**
     * ONLY USE THE COMMENTED OUT CODE IF YOU USE "onchange="renderMovies(event)" ON THE INPUT CLASS .header__search-bar--input
     * This will allow you to target the value when it is changed, works when you submit form
     */
    // let searchedMovie = movieName.target.value;
    // console.log(searchedMovie);
    const movies = await fetch(`https://www.omdbapi.com/?apikey=1b90d60f&s=${movieName}`);
    const moviesData = await movies.json();
    console.log(moviesData);
    console.log(moviesData.Search);
    movieListElement.innerHTML = (moviesData.Search.slice(0, 6)).map((movie) => movieHTML(movie))
    .join("");
}

function movieHTML(movie){
    return `<div class="movie">
                <figure class="movie__img--wrapper">
                    <img class="movie__img" src="${movie.Poster}" alt="">
                </figure>
                <div class="movie__title">
                    ${movie.Title} (${movie.Year})
                </div>
            </div>`;
}
