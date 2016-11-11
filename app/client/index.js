import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import DevTools from 'DevTools/DevTools';
import { createRoutes } from 'Routes';

import { store } from 'redux/store';

const routes = createRoutes(store);

ReactDOM.render(
  <Provider store={ store }>
    <div style={{ height: '100%' }}>
      { routes }
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
