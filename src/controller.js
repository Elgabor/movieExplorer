import { searchMovies } from './api.js';
import { renderMovies } from './view.js';

export function movieToSearch(){
    const searchForm = document.getElementById("search-form");
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const textMovie = document.getElementById("search-input").value;
        if(!textMovie){
            return;
        }
        console.log(textMovie)
        // funzione per cercare e renderizzare
        searchMovies(textMovie)
        .then(movies => renderMovies(movies, favorites))
        .catch(error => console.error(error));
    })

    document.addEventListener('click', (e)=>{
        const btn = e.target.closest('.favorite-btn');
        if (btn) {
            const svg = btn.querySelector('svg');
            svg.classList.toggle('text-yellow-400');
            svg.classList.toggle('text-gray-300');
            const movieId = btn.dataset.id;
            const index = favorites.indexOf(movieId);
            if (index === -1) {
                favorites.push(movieId); // aggiungi se non c'è
            } else {
                favorites.splice(index, 1); // rimuovi se c'è
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
            console.log('Film preferito:', movieId);
        }
    })
}

