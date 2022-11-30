// Global declaration
const API_KEY = "066649f7e3410e9a7f1149d6cf7fb28d";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

const MOVIE_API_URL = "https://api.themoviedb.org/3/movie/popular?api_key="+API_KEY+"&page=1";
const SEARCH_MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=`

// selected element
let row = document.querySelector("#movie-box");
let searchbar = document.querySelector("#search");

async function getMovies(api){
   let response = await fetch(api);
  let data = await response.json();
  let movies = data.results; 
  console.log(movies);


    let container = `` ;

    movies.forEach((movie)=>{
        container += `
        <div class="box">

        <img src=${movie.poster_path ? IMGPATH+movie.poster_path : "https://cdn.xxl.thumbs.canstockphoto.com/image-not-available-written-in-chalk-on-a-blackboard-stock-image_csp8317846.jpg"} alt="movie-img"/>
        <div class="overlay">

           <div class="title">
             ${movie.title.length > 7 ? '<h3>'+movie.title+'</h3>' : '<h2>'+movie.title+'</h2>'}
            <span>${movie.vote_average}</span></div>

            <h3>overview</h3>
            <p>${movie.overview}.</p>
        </div>

       </div>
        ` ;
    })

    row.innerHTML = container ;

   // console.log(container)
}


getMovies(MOVIE_API_URL);


//search movies 

searchbar.addEventListener("keyup", (e)=>{
    console.log(e);
    let searchMovieName = e.target.value ;
   // if(searchMovieName.length>=3){
        let API_URL = `${SEARCH_MOVIE_API_URL+searchMovieName}` ;
        https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=pushpa
        console.log("API_URL = ",API_URL);
        getMovies(API_URL);
   // }
   
})