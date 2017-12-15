import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as userActions from "../actions/userActions";

let actions = { ...userActions };

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  handleSubmit(ev) {
    ev.preventDefault();
    this.props.login(this.state.email, this.state.password, this.props.history);
  }

  render() {
    return (
      <div>
        {this.props.loginError ? (
          <h1>Invalid Login Credentials. Please Try Again.</h1>
        ) : null}
        <form onSubmit={this.handleSubmit}>
          <label>Enter your email</label>
          <input type="text" name="email" onChange={this.handleChange} />
          <label>Enter your password</label>
          <input type="password" name="password" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Login));
