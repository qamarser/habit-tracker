import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Store from './store'; // Import the Redux store
import { Provider } from 'react-redux'; // Import the Provider from react-redux

// Wrap the App component with the Provider and pass the store
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={Store}>
      <App />
    </Provider>
  </StrictMode>
);
