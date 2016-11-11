import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from 'Containers/App';

import Login from 'Pages/Login';
import Dashboard from 'Pages/Dashboard';
import Members from 'Pages/Members';

export const createRoutes = (store) => {

  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route component={App}>
        <Route path="login" component={Login} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="members" component={Members} />
      </Route>
    </Router>

  );
}; 
