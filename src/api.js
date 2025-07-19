export async function searchMovies(query) {
  const API_KEY =  import.meta.env.VITE_API_KAY_MOVIE;
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;

  //richiesta fatch 
  const data =  await fetchMovies(url);
  if (data.Response === "False") {
    throw new Error(data.Error); // Gestione errore OMDb
  }
  return data.Search; // Restituisci i risultati
}


async function fetchMovies(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Fetch status: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}