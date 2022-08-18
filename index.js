// API: http://www.omdbapi.com/?i=tt3896198&apikey=1b90d60f
// API SEARCH: https://www.omdbapi.com/?apikey=1b90d60f&s=fast


async function renderMovies(movieName){
    let searchedMovie = movieName.target.value;
    // console.log(searchedMovie);
    const movies = await fetch(`https://www.omdbapi.com/?apikey=1b90d60f&s=${searchedMovie}`);
    const moviesData = await movies.json();
    console.log(moviesData);
    const mappedArray = moviesData.map((movie) => movieHTML(movie))
    .join("")

    console.log(mappedArray);
}

// function movieHTML(movie){
//     return ``
// }
