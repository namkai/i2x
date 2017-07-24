import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import * as type from '../constants/actionTypes';

import Navbar from '../components/common/navbar';
import requireAuth from '../components/hoc/require_auth';
import routes from '../constants/routes';
import configureStore from '../store';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Feature from './feature';

const store = configureStore();
export const history = createBrowserHistory();

const token = localStorage.getItem('token');

// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: type.AUTH_USER });
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
         <Navbar/>
        <Switch>
          <Route path={routes.SIGNIN} component={Signin} />
           <Route exact path={routes.SIGNOUT} component={Signout} />
          <Route exact path={routes.FEATURE} component={requireAuth(Feature)} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
