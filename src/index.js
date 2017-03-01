import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import 'material-design-icons/iconfont/material-icons.css';
import './style/app.css';
import 'react-mdl/extra/css/material.blue-indigo.min.css';
import 'react-mdl/extra/material.min.js';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/Feed" component={Feed}/>

  
  </Route>
</Router>,
  document.getElementById('root')
);
