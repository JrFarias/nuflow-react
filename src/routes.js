import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';
import Logout from './components/Logout';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/Feed" component={Feed} />
      <Route path="/logout" component={Logout} />
  </Route>
);