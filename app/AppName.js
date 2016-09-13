import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Authenticated from 'components/Authenticated';
import Login from 'components/Login';
import RouteName from 'components/route_name/Index';

import CurrentUser from 'stores/CurrentUser';

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  //Global App UI Elements can go here
  render () {
    return this.props.children;
  }
});

function requireAuth (nextState, replaceState) {
  if (!CurrentUser.getState().details.id) {
    replaceState({
      pathname: '/login',
      state: { nextPathName: nextState.location.pathname }
    });
  }
}

function loggedIn (nextState, replaceState) {
  if (CurrentUser.getState().details.id) {
    replaceState({
      pathname: '/',
      state: { nextPathName: nextState.location.pathname }
    });
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App} path='/'>
      <Route component={Authenticated} onEnter={requireAuth}>
        <IndexRoute component={RouteName} />
      </Route>
      <Route component={Login} onEnter={loggedIn} path='login' />
    </Route>
  </Router>
), document.getElementById('unique-css-id'));