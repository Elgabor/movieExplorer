import { searchMovies } from './api.js';
import { renderMovies } from './view.js';


export function movieToSearch(){
    const searchForm = document.getElementById("search-form");

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const textMovie = document.getElementById("search-input").value;
        if(!textMovie){
            return;
        }
        console.log(textMovie)
    
        // funzione per cercare e renderizzare
        searchMovies(textMovie)
        .then(movies => renderMovies(movies))
        .catch(error => console.error(error));
    })
}