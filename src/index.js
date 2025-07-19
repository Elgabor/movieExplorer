import '../styles/main.css';
import { searchMovies } from './api.js';

const app = document.getElementById('app');
app.innerHTML = '<h1>Hello World</h1>';

searchMovies('Matrix')
  .then(movies => console.log(movies))
  .catch(error => console.error(error));