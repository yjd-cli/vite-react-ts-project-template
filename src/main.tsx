import { routesConfig } from '@src/routes/routes-config';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@src/store';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './index.css';

function RouteElement() {
  const element = useRoutes(routesConfig);
  return element;
}

function RootContainer() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteElement />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootContainer />
  </React.StrictMode>,
);
