import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import LikeALocalContainer from "./LikeALocalContainer";
import Login from "./Login";
import actions from "../actions";

//redux imports
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.getCurrentUser(token);
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    console.log("APP PROPS", this.props);
    return (
      <div>
        <Route exact path="/login" component={Login} />
        <Route path="/cities" component={LikeALocalContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.currentUser };
};

export default withRouter(connect(mapStateToProps, actions)(App));
