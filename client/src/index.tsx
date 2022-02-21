import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components';

import { Provider } from 'react-redux';

import store from 'state/store';

ReactDOM.render(
  <React.StrictMode>
    {/* Redux State Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
