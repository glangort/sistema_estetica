import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  Redirect,
} from 'react-router-dom';

import history from './history';
import Login from './pages/Login';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import NewClientes from './pages/NewClientes';
import Agendamento from './pages/Agendamentos';
import Clientes from './pages/Clientes';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Router history={history}>
        <Route path='/' exact component={Index} />
        <Route path='/login' exact component={Login} />
        <PrivateRoute path='/dashboard' exact component={Dashboard} />
        <PrivateRoute path='/clientes/new' exact component={NewClientes} />
        <PrivateRoute path='/clientes' exact component={Clientes} />
        <PrivateRoute path='/agendamentos' exact component={Agendamento} />
      </Router>
    </Switch>
  </BrowserRouter>
);

export default Routes;
