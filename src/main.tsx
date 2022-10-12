import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

const rootNode = document.getElementById('root');

if (rootNode) {
  createRoot(rootNode).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
