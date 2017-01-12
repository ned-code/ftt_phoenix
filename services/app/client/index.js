import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createApplication } from 'Application';
import { configurateStore } from 'Client/store';

const store = configurateStore(); 
const application = createApplication(store);

// event plugin 
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <div style={{ height: '100%' }}>
      { application }
    </div>
  </Provider>,
  document.getElementById('root')
)
