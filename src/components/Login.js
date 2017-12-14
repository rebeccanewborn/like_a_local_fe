import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

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
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter your email</label>
        <input type="text" name="email" onChange={this.handleChange} />
        <label>Enter your password</label>
        <input type="text" name="password" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default connect(null, actions)(Login);
