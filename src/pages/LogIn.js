import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
  //this sets the initial state for each field
  state = {
    email: "",
    password: "",
  };
  // this here is preventing the page reloading on the submit and saving the state of the form to the console
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
  };
  // this here sets the new state to the fields name (needed so it can be saved)
  onFieldchange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
      return (
          <div>
              Email: <input type='email' name='email' />
              Password: <input type='password' name='password' />
              <br />
              <input type='submit' value='Log In' />
              <br />
              <Link to='/createaccount'>I Don't Have An Account</Link>
          </div>
      )
  }
};
  export default LogIn;