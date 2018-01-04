import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import LikeALocalContainer from "../containers/LikeALocalContainer";
import HomePage from "./HomePage";
import actions from "../actions";

//redux imports
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.getCurrentUser(token);
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/welcome" component={HomePage} />
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
