import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './tokens/index.css';
import './styles/reset.css';
import './styles/utilities.css';
import './styles/treatments.css';
import './styles/textures.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
