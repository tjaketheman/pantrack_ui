import React, { Component } from "react";
import { Link } from "react-router-dom";
import API_URL from "../components/config";

class CreateAccount extends Component {
  //this sets the initial state for each field
  state = {
    fullName: "",
    email: "",
    password: ""
    // passwordCheck: ""
  };
  // this here is preventing the page reloading on the submit and saving the state of the form to the console
  handleSubmit = event => {
    event.preventDefault();
    // const data = new FormData(event.target);
    fetch(`${API_URL}/createaccount`, {
      method: "POST",
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    console.log(this.state);
  };
  // this here sets the new state to the fields name (needed so it can be saved)
  onFieldchange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form className="createAccount" onSubmit={this.handleSubmit}>
        <p>Full Name</p>
        <input type="text" name="fullName" onChange={this.onFieldchange} />
        <p>Email</p>
        <input type="email" name="email" onChange={this.onFieldchange} />
        <p>Password</p>
        <input type="password" name="password" onChange={this.onFieldchange} />
        {/* <p>Re-enter Password</p>
          <input type="password" name="passwordCheck" /> */}
        <br />
        <br />
        <input type="submit" value="Create Account" />
        <br />
        <Link to="/LogIn">I Already Have An Account</Link>
      </form>
    );
  }
}

export default CreateAccount;
