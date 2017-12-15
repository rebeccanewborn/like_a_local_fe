import React, { Component } from "react";
// import "./App.css";
import LikeLocalContainer from "./LikeLocalContainer";
import Login from "./Login";
import * as userActions from "../actions/userActions";
import * as citiesActions from "../actions/citiesActions";

//redux imports
import { connect } from "react-redux";

let actions = { ...userActions, ...citiesActions };

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.getCurrentUser(token);
      this.props.getAllCities();
    }
  }
  render() {
    return (
      <div>{this.props.user.email ? <LikeLocalContainer /> : <Login />}</div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.currentUser };
};

export default connect(mapStateToProps, actions)(App);
