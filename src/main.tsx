import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import { AuthContextProvider } from './context/authContext';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';

initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Hi</h1>
    {/* <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router> */}
  </React.StrictMode>,
);
