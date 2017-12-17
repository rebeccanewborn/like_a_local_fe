import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Form, Header, Message, Input, Button } from "semantic-ui-react";
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
          <Message negative>
            Invalid Login Credentials. Please Try Again.
          </Message>
        ) : null}
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Enter your email</label>
            <Input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </Form.Field>
          <Form.Field>
            <label>Enter your password</label>
            <Input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
        <Link to="/signup">Sign Up Here</Link>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Login));
