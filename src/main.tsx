import { routesConfig } from '@src/routes/routes-config';
import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'moment/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';

import store from '@src/store';
import './index.css';

function RouteElement() {
  const element = useRoutes(routesConfig);
  return element;
}

function RootContainer() {
  return (
    <ConfigProvider locale={locale}>
      <Provider store={store}>
        <BrowserRouter>
          <RouteElement />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RootContainer />,
  // </React.StrictMode>,
);
