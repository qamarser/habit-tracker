import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx';
import Store from './store.jsx'; // Import the Redux store
import { Provider } from 'react-redux'; // Import the Provider from react-redux
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root for rendering the application
const root = createRoot(rootElement);

// Render the application wrapped in StrictMode, Provider, and BrowserRouter
root.render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
