import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import Cart from './Cart';
class First extends Component {
  render() {
    return (

      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path='/showCart' exact component={Cart} />
        <Redirect to='/login' from='/' />

      </Switch>

    );
  }
}


export default First;