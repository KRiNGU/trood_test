import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

const rootNode = document.getElementById('root');

if (rootNode) {
  createRoot(rootNode).render(
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </BrowserRouter>
  );
}
