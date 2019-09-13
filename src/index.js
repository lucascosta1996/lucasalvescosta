import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { I18nContextProvider } from './i18n';

ReactDOM.render(
  <I18nContextProvider>
    <App />
  </I18nContextProvider>,
  document.getElementById('root'));
