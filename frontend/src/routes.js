import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  Redirect,
} from 'react-router-dom';

import history from './history';
import Agendamento from './pages/Agendamentos';
import Clientes from './pages/Clientes';
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';
import Login from './pages/Login';
import NewClientes from './pages/NewClientes';
import ViewClients from './pages/ClientView';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location,
            },
          }}
        />
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

        <PrivateRoute path='/clients/new' exact component={NewClientes} />
        <PrivateRoute path='/clients' exact component={Clientes} />
        <PrivateRoute path='/clients/view/' exact component={ViewClients} />

        <PrivateRoute path='/agendamentos' exact component={Agendamento} />
      </Router>
    </Switch>
  </BrowserRouter>
);

export default Routes;
