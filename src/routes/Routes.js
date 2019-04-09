import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from '../pages/LogIn';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home';
import LoggedOut from '../pages/LoggedOut';
import ForgotPw from '../pages/ForgotPassword';


class Routes extends Component {
    render() {
        return (
    <Router>
        <React.Fragment>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LogIn} />
            <Route path='/createaccount' component={CreateAccount} />
            <Route path='/logout' component={LoggedOut} />
            <Route path='/forgotpw' component={ForgotPw} />
        </React.Fragment>
    </Router>
        )}}

export default Routes;