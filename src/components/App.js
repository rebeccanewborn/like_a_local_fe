import React, { Component } from "react";
// import "./App.css";
import Login from "./Login";

//redux imports
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log("in app render, props are", this.props);
    return (
      <div>
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { user: state.currentUser.user };
};

export default connect(mapStateToProps)(App);
