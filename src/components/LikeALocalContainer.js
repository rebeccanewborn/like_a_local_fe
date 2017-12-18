import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import CitiesContainer from "./CitiesContainer";
import NewExcursion from "./NewExcursion";
import ExcursionShow from "./ExcursionShow";
import actions from "../actions";
import { connect } from "react-redux";

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
        <Switch>
          <Route path="/cities" component={CitiesContainer} />
          <Route path="/excursions/new" component={NewExcursion} />
          <Route path="/excursions" component={ExcursionShow} />
        </Switch>
        <button onClick={this.handleNewExcursion}>New Excursion</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(LikeALocalContainer));
