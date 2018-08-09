import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email: 'a',
      password: 'a',
    };
  }
  /* eslint-disable */
  render() {
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading"> Please sign in </h2>
        <label for="inputEmail" className="sr-only">
          Email address
          </label>
        <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
        <button type="button" onClick={this.signIn.bind(this)} className="btn btn-lg btn-primary btn-block" >
          Sign in
        </button>
      </form>
    )
  }
  /* eslint-enable */

  handleEmailChange(e) {
    console.log('Email changed' + e.target.value);
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  signIn() {
    alert('UNDER CONSTRUCTION!' + ' Email address is ' + this.state.email + ' Password is ' + this.state.password);
  }
}

export default Signin;
