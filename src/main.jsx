import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Store from './store'; // Import the Redux store
import { Provider } from 'react-redux'; // Import the Provider from react-redux
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Wrap the App component with the Provider and BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);