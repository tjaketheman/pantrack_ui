import React, { Component } from 'react';


class ForgotPw extends Component {
  render() {
    return (
      <form>
          <h3>Enter your email and you will be sent a link to reset your password.</h3>
          <input type='email' name='email' />
          <input type='submit' name='submitEmail' value='Email Me'/>
      </form>
    );
  }
}

export default ForgotPw;