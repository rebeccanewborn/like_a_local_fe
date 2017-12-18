import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import CitiesContainer from "./CitiesContainer";
import ExcursionsContainer from "./ExcursionsContainer";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Signup from "../components/Signup";
import actions from "../actions";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

class LikeALocalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.getAllCities();
  }

  handleNewExcursion = ev => {
    this.props.history.push("/excursions/new");
  };

  handleLogout = ev => {
    this.props.history.push("/login");
    this.props.logout();
  };
  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.props.isLoggedIn} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/cities" component={CitiesContainer} />
          <Route path="/excursions" component={ExcursionsContainer} />
        </Switch>
        {this.props.isLoggedIn ? (
          <div>
            <Button onClick={this.handleNewExcursion}>New Excursion</Button>
            <Button onClick={this.handleLogout}>Logout</Button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isLoggedIn: !!state.currentUser.email };
};
export default withRouter(
  connect(mapStateToProps, actions)(LikeALocalContainer)
);
