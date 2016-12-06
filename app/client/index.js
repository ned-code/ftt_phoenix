import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createRoutes } from 'Routes';
import { configurateStore } from 'Client/store';

const store = configurateStore(); 
const routes = createRoutes(store);

// event plugin 
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <div style={{ height: '100%' }}>
      { routes }
    </div>
  </Provider>,
  document.getElementById('root')
)
