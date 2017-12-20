import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import * as actions from "../actions/citiesActions";
import { connect } from "react-redux";
import CitiesIndex from "../components/CitiesIndex";
import CityShow from "../components/CityShow";

class CitiesContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/cities"
          render={() => <CitiesIndex cities={this.props.cities} />}
        />
        <Route
          exact
          path="/cities/:id"
          render={() => <CityShow city={this.props.currentCity} />}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.allCities,
    currentCity: state.currentCity
  };
};

export default withRouter(connect(mapStateToProps, actions)(CitiesContainer));
