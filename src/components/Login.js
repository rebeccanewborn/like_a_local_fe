import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    return (
      <form>
        <label>Enter your email</label>
        <input type="text" name="email" onChange={this.handleChange} />
        <label>Enter your password</label>
        <input type="text" name="password" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default Login;
