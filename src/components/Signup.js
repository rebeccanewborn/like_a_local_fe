import React from "react";
import { Form, Input, Button, TextArea, Message } from "semantic-ui-react";
import Dropzone from "react-dropzone";
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
      password: "",
      avatar_base64: ""
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  handleErrors = () => {
    let keys = Object.keys(this.props.errors);
    if (keys.length > 0) {
      let msgs = keys.map(key => <p>{`${key} ${this.props.errors[key]}`}</p>);
      return <Message negative>{msgs}</Message>;
    } else {
      return null;
    }
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    let reader = new FileReader();
    reader.onload = () => {
      let fileAsDataURL = reader.result;
      this.setState({ avatar_base64: fileAsDataURL });
    };
    reader.onabort = () => {
      console.log("aborting");
    };
    reader.onerror = () => {
      console.log("erroring");
    };

    reader.readAsDataURL(acceptedFiles[0]);
  };

  render() {
    // let componentConfig = {
    //   iconFiletypes: [".jpg", ".png", ".gif"],
    //   showFiletypeIcon: true,
    //   postUrl: "no-url"
    // };
    return (
      <div>
        {this.handleErrors()}
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
            <label>Upload an avatar</label>
            <Dropzone accept="image/*" onDrop={this.onDrop}>
              <div>
                Try dropping some files here, or click to select files to
                upload.
              </div>
            </Dropzone>
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

/*

*/

const mapStateToProps = state => {
  return { errors: state.errors.signup };
};
export default withRouter(connect(mapStateToProps, actions)(Signup));
