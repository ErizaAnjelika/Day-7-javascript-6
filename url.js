// export const API ={
//     BASE_URL : "https://web.com",
//     AUTH :{
//         LOGIN :'/Login'
//     }
// }

// const BASE_URL ="http://example.com"
// const MOVIES = "movies.json"
//const MOVIE_DETAIL = "movies.json"

export const API ={
    BASE_URL :"http://example.com",
    MOVIES :{
        MOVIE_ALL:"...",
        MOVIE_DETAIL:"..."
    }
}
async function logMovies() {
    const response = await fetch(`${BASE_URL}`);
    const movies = await response.json();
    console.log(movies);
}