import React from "react";
import { Form, Input, Button, TextArea } from "semantic-ui-react";
import * as actions from "../actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      email: "",
      password: ""
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Enter Your Full Name</label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Tell Us About Yourself</label>
            <TextArea
              placeholder="Tell us about yourself"
              name="bio"
              onChange={this.handleChange}
              value={this.state.bio}
              style={{ minHeight: 100 }}
            />
          </Form.Field>
          <Form.Field>
            <label>Enter Your Email</label>
            <Input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </Form.Field>
          <Form.Field>
            <label>Choose a Password</label>
            <Input
              type="text"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Field>
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Signup));
