import '../styles/main.css';
import { movieToSearch } from './controller.js';

// import Firebase Auth
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';


movieToSearch();

onAuthStateChanged(auth, (user) => {
    if (user) {
      // Utente loggato: mostra la app, nascondi auth
      document.getElementById('auth-section').style.display = 'none';
      document.getElementById('app-section').style.display = 'block';
    } else {
      // Utente non loggato: mostra auth, nascondi app
      document.getElementById('auth-section').style.display = 'block';
      document.getElementById('app-section').style.display = 'none';
    }
  });