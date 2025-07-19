export function renderMovies(movies) {
    const resultsDiv = document.getElementById("result");
    resultsDiv.innerHTML = '';

    movies.forEach(element => {
        const posterUrl = (element.Poster !== "N/A")
            ? element.Poster
            : " https://dummyimage.com/300x450/cccccc/000000&text=No+Image";

        const card = `
            <div class="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden m-4 transform hover:scale-105 transition duration-300 cursor-pointer group">
                <div class="relative">
                    <img class="w-full h-64 object-cover" src="${posterUrl}" alt="${element.Title}" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div class="p-5 bg-white">
                    <h2 class="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">${element.Title}</h2>
                    <p class="text-gray-500 mt-1">Anno: ${element.Year}</p>
                    <button class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                        Dettagli
                    </button>
                    <!-- Star button with toggle on click -->
                    <button 
                        class="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md transform transition duration-200 focus:outline-none hover:scale-110"
                        onclick="const svg = this.querySelector('svg'); svg.classList.toggle('text-yellow-400'); svg.classList.toggle('text-gray-300');"
                    >
                        <!-- Heroicon Solid Star -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.371 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.372-2.45a1 1 0 00-1.175 0l-3.372 2.45c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.06 9.386c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.288-3.958z" />
                        </svg>
                    </button>
                </div>
            </div>
        `;
        resultsDiv.innerHTML += card;
    });
}