let movieInput = document.getElementById("movieInput");

let searchBtn = document.getElementById("searchBtn");

let movie = document.getElementById("movie");


    let apiKey = "b0af624f";

    
    async function getMovie() {

    let movieName = movieInput.value.trim();

    if(movieName ===""){
        return;
    }

    let url =  `https://www.omdbapi.com/?apikey=${"b0af624f"}&t=${movieName}`;
    
    movie.innerHTML = "<h2>Loading...</h2>";

    let response = await fetch(url)

    let data = await response.json();

    movieInput.value = "";

   if(data.Response === "False"){

    movie.innerHTML = "<h2>❌  Movie not found</h2>";

    return;
   }

    movie.innerHTML = `
    <img src="${data.Poster}" width="200">

    <h2>${data.Title}</h2>

    <p>${data.imdbRating}</p>

    <p>📅 ${data.Year}</p
    
    <p>${data.Genre}</p>

    <p>Director: ${data.Director}</p>

    <p>${data.Actors}</p>

    <p>${data.Plot}</p>

    `;
    
    }

searchBtn.addEventListener("click", function(){

    getMovie();

});

movieInput.addEventListener("keydown", function(){
    if(event.key === "Enter"){

        getMovie();
    }
});
   

console.log("Hello Git");