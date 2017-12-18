import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import * as actions from "../actions/citiesActions";
import { connect } from "react-redux";
import CitiesIndex from "../components/CitiesIndex";
import CityShow from "../components/CityShow";

class CitiesContainer extends React.Component {
  index = () => this.props.location.pathname.slice(8);

  renderShow = ({ match }) => {
    let currentCity = this.props.allCities.find(
      city => city.id === parseInt(match.params.id)
    );
    return <CityShow city={currentCity} />;
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/cities"
          render={() => <CitiesIndex cities={this.props.allCities} />}
        />
        <Route exact path="/cities/:id" render={this.renderShow} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCities: state.cities.allCities
  };
};

export default withRouter(connect(mapStateToProps, actions)(CitiesContainer));
