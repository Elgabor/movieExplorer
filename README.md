Obiettivi generali
	•	Impostare un ambiente moderno e versionato
	•	Consumare API esterne con fetch/async-await
	•	Renderizzare dati dinamicamente in HTML/CSS
	•	Organizzare il codice in moduli ES6
	•	Gestire stato e persistenza con localStorage
	•	Migliorare UX (loading, error, debounce)
	•	Prepararsi al passaggio a React

piano di sviluppo: 
Fase 1 – Integrazione API (MVP)

Obiettivo: ottenere dati reali dai film tramite l’OMDb.
	•	Task 1.1: In api.js, implementa searchMovies(query) con fetch su https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}.
	•	Task 1.2: Gestisci i casi di errore (status HTTP non OK, data.Response === "False").
	•	Task 1.3: Test rapido in index.js: console.log(await searchMovies("Matrix")).

⸻

Fase 2 – Rendering dei risultati

Obiettivo: mostrare i film al termine della ricerca.
	•	Task 2.1: In view.js, scrivi renderResults(movies) che genera card HTML con immagine, titolo e anno.
	•	Task 2.2: Aggiungi in public/index.html un <div id="results"></div>.
	•	Task 2.3: Definisci stili base in main.css per disporre le card in grid/flessibile.

⸻

Fase 3 – Gestione del form di ricerca

Obiettivo: far partire la ricerca da un form utente.
	•	Task 3.1: In controller.js, seleziona il form #search-form e aggiungi submit listener con e.preventDefault().
	•	Task 3.2: Al submit: mostra renderLoading(), chiama searchMovies(), poi renderResults() o renderError().
	•	Task 3.3: Pulisci lo stato precedente (errori, loading, risultati).

⸻

Fase 4 – Funzionalità “Preferiti”

Obiettivo: permettere di salvare film in una sezione dedicata.
	•	Task 4.1: In renderResults, aggiungi un bottone “⭐ Aggiungi” per ogni card con attributo data-id.
	•	Task 4.2: In controller.js, gestisci il click sul bottone per aggiungere/rimuovere il film da un array favorites.
	•	Task 4.3: Crea renderFavorites(favorites) in view.js e un <div id="favorites"></div> in HTML.

⸻

Fase 5 – Persistenza con localStorage

Obiettivo: mantenere i preferiti tra un refresh e l’altro.
	•	Task 5.1: Implementa saveFavorites() che serializza con JSON.stringify e localStorage.setItem.
	•	Task 5.2: Implementa loadFavorites() in avvio di initApp(), deserializzando con JSON.parse.
	•	Task 5.3: Evita duplicati nei preferiti (usa some o find).

⸻

Fase 6 – UX e Robustezza

Obiettivo: migliorare l’esperienza utente con stati e performance.
	•	Task 6.1: Blocca il bottone “Cerca” e mostra spinner durante il fetch.
	•	Task 6.2: Implementa messaggi user-friendly (es. “Nessun risultato” o “Errore di rete”).
	•	Task 6.3: (Opzionale) Aggiungi debounce (300 ms) sull’input per chiamate automatiche.

⸻

Fase 7 – Estensioni opzionali

Obiettivo: arricchire l’app con funzionalità extra.
	•	Task 7.1: Filtro per anno: aggiungi <select> di anni e modifica searchMovies(query, year).
	•	Task 7.2: Modal dettagli: al click su una card, chiama getMovieById(id) e mostra trama, regista, durata.
	•	Task 7.3: Paginazione: implementa parametri page= nell’API e bottoni “Next”/“Prev”.
	•	Task 7.4: Accessibilità: aria-label, tab-order, focus-trap nel modal.

⸻

Fase 8 – Transizione a React (opzionale)

Obiettivo: prepararsi al refactoring React.
	•	Task 8.1: Disegna componenti: <App>, <SearchForm>, <MovieList>, <MovieCard>, <Favorites>.
	•	Task 8.2: Crea boilerplate React con Vite e sposta logica in hook (useState, useEffect).
	•	Task 8.3: Verifica l’equivalenza funzionale rispetto all’implementazione vanilla.


REGOLE: 
1. Sempre rispondere in italiano
2. Non devi completarmi le cose o darmi direttamente la soluzione ma farmici arrivare
3. Il tuo ruolo e quello di un toutor che sta insegnando ad un jounior a sviluppare
4. Per le informazioni riguardanti il progetto devi leggere il file readme.md
5. Qui dovrai effettuare tutti i log della chat
6. Se per motivi pratici o ditattici ritieni di dover modificare il piano di sviluppo in fasi fallo, ma comunicandomi il perche

LOG CHAT: