# Movie Explorer

Movie Explorer is a portfolio project designed to help me improve my web development skills. The application allows users to search for movies using the OMDb API, manage a list of favorite movies, and (in future phases) register and log in with their own account. This project is not intended for production use, but as a learning and showcase tool.

## Features
- Search for movies using the OMDb API
- Responsive and modern UI with Tailwind CSS
- Add/remove movies to/from favorites (with persistence via localStorage)
- Favorites are visually highlighted
- (Planned) User authentication (login/register) with Firebase
- (Planned) Error handling and user feedback improvements
- (Planned) Protected routes and user-specific data

## Tech Stack
- HTML5, CSS3 (Tailwind CSS)
- JavaScript (ES6 modules)
- Vite (development server and build tool)
- OMDb API
- (Planned) Firebase Authentication

## Setup & Usage
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/movie-explorer.git
   cd movie-explorer
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Create a `.env` file** in the root directory and add your OMDb API key:
   ```env
   VITE_API_KEY_MOVIE=your_omdb_api_key
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser** and go to `http://localhost:3000`

## Educational Purpose
This project is for educational and portfolio purposes only. It is not intended for production use or to handle sensitive data. The codebase is structured to demonstrate best practices, modularity, and modern web development techniques.

## Roadmap
- [x] Movie search and results rendering
- [x] Favorites management with localStorage
- [ ] User authentication (Firebase)
- [ ] Improved error handling and user feedback
- [ ] Protected routes (login/register as entry point)
- [ ] Accessibility and responsive improvements
- [ ] Deployment (Vercel/Netlify)
- [ ] (Optional) Migration to React

## License
This project is open source and available under the [MIT License](LICENSE).

---
**Note:** This repository may contain files (such as `.env` and `DEV_IA_NOTES.md`) that are for local development and personal notes only. These files should not be shared or committed to public repositories.
