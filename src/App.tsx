import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from "../src/contants/routes";
import { Provider  } from 'react-redux';

import store from './store';

import Dashboard from './pages/DashboardPage';
import Register from './pages/RegisterPage';



function App() {
  return (
    <Suspense fallback="">
      <Router>
      <Provider store={store}>
        <>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Dashboard}/>
          <Route exact path={ROUTES.REGISTER} component={Register}/>
        </Switch>
        </>
      </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
