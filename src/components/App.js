import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import LikeALocalContainer from "./LikeALocalContainer";
import Login from "./Login";
import Signup from "./Signup";
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
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/" component={LikeALocalContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.currentUser };
};

export default withRouter(connect(mapStateToProps, actions)(App));
